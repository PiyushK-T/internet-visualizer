import { useState } from "react";
import type { ConnectionData, NetworkNodeData, PacketData } from "../../simulation/types";
import Timeline from "../panels/Timeline";
import Inspector from "../panels/Inspector";
import Explanation from "../panels/Explanation";
import NetworkCanvas from "../network/NetworkCanvas";
import BottomControls from "./BottomControls";
import { usePacketAnimation } from "../../simulation/usePacketAnimation";
import { useSimulation } from "../../simulation/useSimulation";

export default function SimulatorLayout() {
  const [selectedNode, setSelectedNode] = useState<NetworkNodeData | null>(null);
  const [selectedConnection, setSelectedConnection] = useState<ConnectionData | null>(null);
  const [packets, setPackets] = useState<PacketData[]>([]);
  const simulation = useSimulation(packets,setPackets);
  const [selectedPacket, setSelectedPacket] = useState<PacketData|null>(null);

  usePacketAnimation(packets, setPackets);

  console.log("Packets:", packets);
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050505] text-white flex flex-col">
      <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold">Internet Visualizer</h1>
        <div className="text-sm text-green-400">Simulation Ready</div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <section className="w-72 border-r border-gray-800 p-4">
          <Timeline currentStepIndex={simulation.currentStage} />
        </section>

        <section className="flex-1 relative">
          <NetworkCanvas
            selectedNode={selectedNode?.id ?? null}
            onNodeSelect={setSelectedNode}
            selectedConnection={selectedConnection?.id ?? null}
            onConnectionSelect={setSelectedConnection}
            packets={packets}
            selectedPacket={selectedPacket}
            onPacketSelect={setSelectedPacket}
          />
        </section>

        <section className="w-96 border-l border-gray-800 p-4">
          <div className="flex h-full flex-col gap-4 overflow-y-auto">
            <Explanation
              currentStage={simulation.stage}
              selectedNode={selectedNode}
              selectedConnection={selectedConnection}
            />
            <Inspector
              selectedNode={selectedNode}
              selectedConnection={selectedConnection}
              selectedPacket={selectedPacket}
              currentStage={simulation.stage}
            />
          </div>
        </section>
      </div>

      <BottomControls onStart={simulation.start} />
    </div>
  );
}