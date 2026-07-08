import { nodePositions } from "../../simulation/layout";
import { connections } from "../../simulation/connections";
import type { ConnectionData } from "../../simulation/types";
import { pathRegistry } from "../../simulation/pathRegistry";

interface Props {
  activeConnection?: string | null;
  activeConnectionColor?: "blue" | "green";
  onConnectionSelect: (connection: ConnectionData) => void;
}

const NODE_HEIGHT = 112;
const NODE_HALF_WIDTH = 60; 

// Maps connection IDs directly to their routing flow: 
// true = Vertical-then-Horizontal (V then H) | false/undefined = Horizontal-then-Vertical (H then V)
const PREFER_VERTICAL_FIRST: Record<string, boolean> = {
  // "browser-dns":false,
  // "browser-router":false,
  // "router-cdn":false,
  // "router-loadbalancer":false,
  "loadbalancer-server1": false,
  "loadbalancer-server2": false,
  "server1-loadbalancer": true,
  "server2-loadbalancer": true,
  "server1-database": true,
  "server2-database": true,
  "database-server1": false,
  "database-server2": false,
};

export default function SVGConnectionLayer({
  activeConnection,
  activeConnectionColor = "blue",
  onConnectionSelect
}: Props) {
  function createPath(from: string, to: string, connectionId: string) {
    const start = nodePositions[from];
    const end = nodePositions[to];

    // 1. PERFECTLY HORIZONTAL LINES
    if (start.y === end.y) {
      const isRightward = start.x < end.x;
      const startX = isRightward ? start.x + NODE_HALF_WIDTH : start.x - NODE_HALF_WIDTH;
      const endX = isRightward ? end.x - NODE_HALF_WIDTH : end.x + NODE_HALF_WIDTH;
      return `M ${startX} ${start.y} L ${endX} ${start.y}`;
    }

    // 2. BACKEND ORTHOGONAL ROUTING MAPPER (Cleaned & Shortened)
    if (connectionId in PREFER_VERTICAL_FIRST) {
      if (PREFER_VERTICAL_FIRST[connectionId]) {
        return `M ${start.x} ${start.y} V ${end.y} H ${end.x}`;
      }
      return `M ${start.x} ${start.y} H ${end.x} V ${end.y}`;
    }

    // 3. CORE VERTICAL FALLBACK LINES
    const isDownward = start.y < end.y;
    const startY = isDownward ? start.y - NODE_HEIGHT / 4 : start.y + NODE_HEIGHT / 4;
    const endY = isDownward ? end.y + NODE_HEIGHT / 4 : end.y - NODE_HEIGHT / 4;
    return `M ${start.x} ${startY} L ${end.x} ${endY}`;
  }

  return (
    <svg className="absolute top-0 left-0" width="1200" height="1200">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>

      {connections.map((connection) => {
        const active = activeConnection === connection.id;
        const activeColor = activeConnectionColor === "green" ? "#4ade80" : "#38bdf8";
        const path = createPath(connection.from, connection.to, connection.id);

        return (
          <g key={connection.id}>
            {active && (
              <path
                d={path}
                fill="none"
                stroke={activeColor}
                strokeWidth="16"
                opacity="0.28"
                filter="url(#glow)"
              />
            )}
            <path
              id={connection.id}
              ref={(el) => { if (el) pathRegistry[connection.id] = el; }}
              d={path}
              fill="none"
              stroke={active ? activeColor : "#475569"}
              strokeWidth={active ? 5 : 3}
              strokeLinecap="round"
              strokeLinejoin="round"
              pointerEvents="stroke"
              cursor="pointer"
              onClick={() => onConnectionSelect(connection)}
            />
          </g>
        );
      })}
    </svg>
  );
}