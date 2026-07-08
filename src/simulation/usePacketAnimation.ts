// simulation/usePacketAnimation.ts
import { useEffect } from "react";
import type { PacketData } from "./types";

export function usePacketAnimation(
  packets: PacketData[],
  setPackets: React.Dispatch<React.SetStateAction<PacketData[]>>
) {
  useEffect(() => {
    // If there are no active packets moving, don't run an idle background timer
    if (packets.length === 0 || packets.every(p => p.status !== "moving")) return;

    const timer = setInterval(() => {
      setPackets(current =>
        current.map(packet => {
          if (packet.status !== "moving") return packet;

          const nextProgress = packet.progress + 0.02; // Slightly increased step speed

          if (nextProgress >= 1) {
            return { ...packet, progress: 1, status: "complete" };
          }

          return { ...packet, progress: nextProgress };
        })
      );
    }, 30);

    return () => clearInterval(timer);
  }, [packets, setPackets]); // <-- Fixed: Triggers a fresh, accurate timer closure whenever state changes
}