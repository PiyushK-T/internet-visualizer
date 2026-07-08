import NetworkNode from "./NetworkNode";
import type { NetworkNodeData, PacketData } from "../../simulation/types";
import SVGConnectionLayer from "./SVGConnectionLayer";
import { networkNodes } from "../../simulation/flow";
import { nodePositions } from "../../simulation/layout";
import type { ConnectionData } from "../../simulation/types";
import PacketLayer from "./PacketLayer";

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
  return (
    <div className="h-full w-full overflow-auto bg-[#080808]">
      <div
        className="relative mx-auto"
        style={{
          width: "1200px",
          height: "1100px",
        }}
      >
            <div className="absolute inset-0 z-0">
                <SVGConnectionLayer
                    activeConnection={selectedConnection}
                    onConnectionSelect={onConnectionSelect}
                />
            </div>


            <div className="absolute inset-0 z-10 pointer-events-none">
                <PacketLayer 
                    packets={packets} 
                    selectedPacket={selectedPacket} 
                    onPacketSelect={onPacketSelect}
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