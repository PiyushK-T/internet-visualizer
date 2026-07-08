// simulation/timeline.ts
export interface TimelineStep {
  id: string;
  label: string;
}

export const timelineSteps: TimelineStep[] = [
  { id: "browser", label: "Browser Request" },
  { id: "dns-query", label: "DNS Query" },       // Split out
  { id: "dns-response", label: "DNS Response" }, // Split out
  { id: "cdn", label: "CDN Cache" },
  { id: "edge-opt", label: "Edge Optimization" },
  { id: "server", label: "Server Processing" },
  { id: "database", label: "Database Query" }
];