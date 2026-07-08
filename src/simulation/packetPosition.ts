import { pathRegistry } from "./pathRegistry";
import { nodePositions } from "./layout";

export function getPacketPosition(
  connectionId: string,
  progress: number,
  reverse?: boolean
) {
  const path = pathRegistry[connectionId];

  // 1. FALLBACK ROUTING (If SVG path isn't rendered/registered in DOM yet)
  if (!path) {
    const [from, to] = connectionId.split("-");
    const start = from ? nodePositions[from] : undefined;
    const end = to ? nodePositions[to] : undefined;

    if (start && end) {
      // Calculate dynamic progress factoring in the direction
      const effectiveProgress = reverse ? (1 - progress) : progress;

      // Smoothly interpolate between nodes based on time progress
      const midX = start.x + (end.x - start.x) * effectiveProgress;
      const midY = start.y + (end.y - start.y) * effectiveProgress;

      return { x: midX, y: midY };
    }

    return { x: 0, y: 0 };
  }

  // 2. SVG PATH TRAVEL LOGIC (Primary Engine)
  const length = path.getTotalLength();
  const effectiveProgress = reverse ? (1 - progress) : progress;
  const point = path.getPointAtLength(length * effectiveProgress);

  return {
    x: point.x,
    y: point.y
  };
}