// simulation/useSimulation.ts
import { useEffect, useState } from "react";
import { requestStages } from "./stages";
import { createPacket } from "./createPacket";
import type { PacketData } from "./types";

export function useSimulation(
  packets: PacketData[], // <-- Pass the packets array in here so we can read their real-time status!
  setPackets: React.Dispatch<React.SetStateAction<PacketData[]>>
) {
  const [currentStage, setCurrentStage] = useState(0);
  const [running, setRunning] = useState(false);

  function start() {
    setCurrentStage(0);
    setRunning(true);
    // Directly spawn the absolute first packet at index 0 right on click
    const firstPacket = createPacket(requestStages[0]);
    setPackets([firstPacket]);
  }

  // Event-driven progression listener
  useEffect(() => {
    if (!running || packets.length === 0) return;

    // Look for the current active packet that just finished traveling its path
    const currentActivePacket = packets[packets.length - 1];

    if (currentActivePacket && currentActivePacket.status === "complete") {
      const nextIndex = currentStage + 1;

      if (nextIndex < requestStages.length) {
        // Wait a split second for visual pacing, then advance
        const timeout = setTimeout(() => {
          setCurrentStage(nextIndex);
          const nextPacket = createPacket(requestStages[nextIndex]);
          setPackets(prev => [...prev, nextPacket]);
        }, 400); // 400ms delay between hops for smooth transition look

        return () => clearTimeout(timeout);
      } else {
        setRunning(false); // Entire timeline finished cleanly!
      }
    }
  }, [running, packets, currentStage, setPackets]);

  return {
    running,
    currentStage,
    stage: requestStages[currentStage],
    start
  };
}