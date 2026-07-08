export interface NetworkNodeData {
  id: string;
  title: string;
  icon: string;
  description: string;
  type: "browser" | "dns" | "cdn" | "loadbalancer" | "router" | "server" | "database";

  /** Metadata for the side-panel Network Inspector */
  details: {
    purpose: string;
    technology: string;
    example: string;
  };
}

export interface ConnectionData {
  id: string;
  from: string; // Refers to a NetworkNodeData.id source
  to: string;   // Refers to a NetworkNodeData.id destination
  label: string;
  protocol: string; 
  description: string; 
}

export type PacketProtocol =
  | "DNS"
  | "TCP"
  | "TLS"
  | "HTTPS"
  | "SQL";


export interface PacketData {

id:string;

protocol:PacketProtocol;

source:string;

destination:string;


route:string[];


currentStep:number;


progress:number;


status:
"waiting"
|
"moving"
|
"complete";


size:string;

latency:number;


connectionId:string;

reverse?:boolean;

}

export interface TimelineStep {

id:string;

label:string;

completed:boolean;

active:boolean;

}

export interface SimulationStage {
  id:string;
  label:string;
  description:string;
  protocol:string;
  from:string;
  to:string;
  reverse?: boolean;
}