import {useEffect} from "react";
import type {PacketData} from "./types";


export function usePacketAnimation(
packets:PacketData[],
setPackets:
React.Dispatch<
React.SetStateAction<PacketData[]>
>
){


useEffect(()=>{


const timer =
setInterval(()=>{


setPackets(current=>

current.map(packet=>{


if(packet.status!=="moving")
return packet;



let progress =
packet.progress + 0.01;



if(progress>=1){

progress=1;

}



if(progress >= 1){

return {

...packet,

status:"complete"

};

}


return {

...packet,

progress

};

})

);



},30);



return ()=>clearInterval(timer);


},[]);


}