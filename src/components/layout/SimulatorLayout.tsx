import { useState } from "react";
import type { NetworkNodeData } from "../../simulation/types";
import Timeline from "../panels/Timeline";
import Inspector from "../panels/Inspector";
import NetworkCanvas from "../network/NetworkCanvas";
import BottomControls from "./BottomControls";
import type { ConnectionData } from "../../simulation/types";
import { initialPackets } from "../../simulation/packets";
import { usePacketAnimation } from "../../simulation/usePacketAnimation";
import type { PacketData } from "../../simulation/types";
import { useSimulation } from "../../simulation/useSimulation";

export default function SimulatorLayout() {
  const [selectedNode, setSelectedNode] = useState<NetworkNodeData | null>(null);
  const [selectedConnection, setSelectedConnection] = useState<ConnectionData | null>(null);
  const [packets, setPackets] = useState<PacketData[]>([]);
  const simulation = useSimulation(setPackets);
  const [selectedPacket, setSelectedPacket] = useState<PacketData|null>(null);

  usePacketAnimation(packets, setPackets);

  console.log("Packets:", packets);
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050505] text-white flex flex-col">
      
      {/* HEADER */}
      <header className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold">Internet Visualizer</h1>
        <div className="text-sm text-green-400">Simulation Ready</div>
      </header>

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT: Timeline */}
        <section className="w-72 border-r border-gray-800 p-4">
          <Timeline />
        </section>

        {/* CENTER: Network Canvas */}
        <section className="flex-1 relative">
          <NetworkCanvas
            selectedNode={selectedNode?.id ?? null}
            onNodeSelect={setSelectedNode}
            selectedConnection={selectedConnection?.id ?? null}
            onConnectionSelect={setSelectedConnection} packets={[]}  
            selectedPacket={selectedPacket}
            onPacketSelect={setSelectedPacket}
          />
        </section>

        {/* RIGHT: Inspector */}
        <section className="w-96 border-l border-gray-800 p-4">
          <Inspector selectedNode={selectedNode} selectedConnection={selectedConnection} selectedPacket={selectedPacket} currentStage={simulation.stage}  />
        </section>

      </div>

      {/* BOTTOM: Controls */}
      <BottomControls 
        onStart={simulation.start}
      />

    </div>
  );
}