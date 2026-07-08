import { useEffect, useState } from "react";
import NetworkNode from "./NetworkNode";
import type { NetworkNodeData, PacketData } from "../../simulation/types";
import SVGConnectionLayer from "./SVGConnectionLayer";
import { networkNodes } from "../../simulation/flow";
import { nodePositions } from "../../simulation/layout";
import type { ConnectionData } from "../../simulation/types";
import PacketLayer from "./PacketLayer";
import { connections } from "../../simulation/connections";

interface Props {
  selectedNode: string | null;
  onNodeSelect: (node: NetworkNodeData) => void;
  selectedConnection: string | null;
  onConnectionSelect: (connection: ConnectionData) => void;
  packets: PacketData[];
  selectedPacket: PacketData | null;
  onPacketSelect: (packet: PacketData | null) => void;
}

export default function NetworkCanvas({
  selectedNode,
  onNodeSelect,
  selectedConnection,
  onConnectionSelect,
  packets,
  selectedPacket,
  onPacketSelect
}: Props) {
  const [pathVersion, setPathVersion] = useState(0);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setPathVersion((value) => value + 1));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const activePacket = packets.find((packet) => packet.status === "moving") ?? null;
  const highlightedConnectionId = activePacket?.connectionId ?? selectedConnection;
  const highlightedConnection = connections.find((connection) => connection.id === highlightedConnectionId) ?? null;
  const highlightedNodeIds = highlightedConnection
    ? new Set([highlightedConnection.from, highlightedConnection.to])
    : new Set<string>();

  return (
    <div className="h-full w-full overflow-hidden bg-[#080808]">
      <div
        className="relative mx-auto"
        style={{
          width: "1200px",
          height: "1400px",
        }}
      >
            <div className="absolute inset-0 z-0">
                <SVGConnectionLayer
                    activeConnection={highlightedConnectionId}
                    activeConnectionColor={activePacket?.reverse ? "green" : "blue"}
                    onConnectionSelect={onConnectionSelect}
                />
            </div>


            <div className="absolute inset-0 z-10 pointer-events-none">
                <PacketLayer 
                    packets={packets} 
                    selectedPacket={selectedPacket} 
                    onPacketSelect={onPacketSelect}
                    pathVersion={pathVersion}
                />
            </div>


            <div className="absolute inset-0 z-20 pointer-events-none">

            {
            networkNodes.map((node)=>{

            const position =
            nodePositions[node.id as keyof typeof nodePositions];


            return (

            <div

            key={node.id}

            className="absolute pointer-events-auto"

            style={{
            left:position.x,
            top:position.y,
            transform:"translate(-50%, -50%)"
            }}

            >

            <NetworkNode

            node={node}

            selected={selectedNode===node.id}

            active={highlightedNodeIds.has(node.id)}

            onSelect={onNodeSelect}

            />

            </div>

            )

            })

            }

            </div>
      </div>
    </div>
  );
}