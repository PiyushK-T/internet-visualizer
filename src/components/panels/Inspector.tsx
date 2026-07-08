import type { NetworkNodeData } from "../../simulation/types";
import type { ConnectionData } from "../../simulation/types";
import type { PacketData } from "../../simulation/types";

interface Props {
  selectedNode: NetworkNodeData | null;
  selectedConnection: ConnectionData | null;
  selectedPacket: PacketData | null;
  currentStage?: {
    label: string;
    description: string;
  } | null;
}

export default function Inspector({
  selectedNode,
  selectedConnection,
  selectedPacket,
  currentStage
}: Props) {
  return (
    <div className="space-y-5 h-full">
      
      {/* Packet & Connection Card */}
      {selectedPacket && (
        <div
          className="
            bg-gray-950
            border
            border-gray-700
            rounded-xl
            p-4
            space-y-2
          "
        >
          <h2 className="text-xl font-bold">
            Packet Information
          </h2>

          <p>ID: {selectedPacket.id}</p>
          <p>Protocol: {selectedPacket.protocol}</p>
          <p>From: {selectedPacket.source}</p>
          <p>To: {selectedPacket.destination}</p>
          <p>Size: {selectedPacket.size}</p>
          <p>Latency: {selectedPacket.latency} ms</p>
          <p>Status: {selectedPacket.status}</p>

          {selectedConnection && (
            <>
              <h3 className="font-bold text-xl mt-4">
                Connection
              </h3>
              <p>{selectedConnection.label}</p>
              <p className="text-gray-400">
                Protocol: {selectedConnection.protocol}
              </p>
              <p className="text-gray-400">
                {selectedConnection.description}
              </p>
            </>
          )}
        </div>
      )}

      {/* Current Operation Card */}
      {currentStage && (
        <div
          className="
            bg-gray-950
            border
            border-blue-700
            rounded-xl
            p-4
            space-y-2
          "
        >
          <h2 className="text-xl font-bold">
            Current Operation
          </h2>
          <p className="font-semibold">
            {currentStage.label}
          </p>
          <p className="text-gray-400 text-sm">
            {currentStage.description}
          </p>
        </div>
      )}
        
      <h2 className="text-lg font-bold border-b border-gray-800 pb-2">
        Network Inspector
      </h2>

      {selectedNode ? (
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-12rem)] pr-1">
          
          {/* Node Meta Card */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex items-start gap-4">
            <div className="text-4xl p-2 bg-gray-900 rounded-lg select-none">
              {selectedNode.icon}
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xl">{selectedNode.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {selectedNode.description}
              </p>
            </div>
          </div>

          {/* Purpose Details Card */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 space-y-1">
            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">
              Purpose
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {selectedNode.details.purpose}
            </p>
          </div>

          {/* Technology Details Card */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 space-y-1">
            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">
              Technology
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {selectedNode.details.technology}
            </p>
          </div>

          {/* Example Details Card */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 space-y-1">
            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">
              Example
            </h3>
            <p className="text-gray-200 text-sm font-mono bg-gray-900/50 p-2 rounded border border-gray-800/50 mt-1">
              {selectedNode.details.example}
            </p>
          </div>

        </div>
      ) : (
        <div className="h-48 flex items-center justify-center border border-dashed border-gray-800 rounded-xl bg-gray-950/30">
          <p className="text-gray-500 text-sm text-center">
            Click a network component to inspect it.
          </p>
        </div>
      )}
    </div>
  );
}