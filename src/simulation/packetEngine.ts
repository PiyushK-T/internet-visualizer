import type {PacketData} from "./types";


export function updatePacket(
packet:PacketData,
delta:number
):PacketData{


let progress =
packet.progress + delta;



if(progress >= 1){

return {

...packet,

progress:0,

currentStep:
packet.currentStep + 1

};

}



return {

...packet,

progress

};

}