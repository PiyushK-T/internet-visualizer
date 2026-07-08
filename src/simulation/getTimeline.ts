import type {PacketData} from "./types";


export function getTimeline(
packet:PacketData|null
){


if(!packet)
return [];


return [

{
label:"Browser Request",
completed:true
},

{
label:"DNS Lookup",
completed:
packet.protocol==="DNS"
},

{
label:"CDN Lookup",
completed:false
},

{
label:"Server Request",
completed:false
},

{
label:"Database Query",
completed:false
}

];


}