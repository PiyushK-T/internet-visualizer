import type {PacketData} from "./types";


export const initialPackets:PacketData[] = [

{
id:"packet-001",

protocol:"DNS",

source:"browser",

destination:"dns",

route:[
"browser",
"dns"
],

connectionId:"browser-dns",

currentStep:0,

progress:0,

status:"moving",

size:"512 bytes",

latency:20

}

];