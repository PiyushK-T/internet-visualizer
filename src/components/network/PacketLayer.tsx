import type {PacketData} from "../../simulation/types";
import {getPacketPosition} from "../../simulation/packetPosition";


interface Props{
packets:PacketData[];
selectedPacket:PacketData|null;
onPacketSelect:(packet:PacketData|null)=>void;
}


export default function PacketLayer({
packets,
selectedPacket,
onPacketSelect
}:Props){


return (

<>

{
packets
.filter(
packet=>packet.status !== "complete"
)
.map(packet=>{

const position =
getPacketPosition(
packet.connectionId,
packet.progress
);



return (

<div

key={packet.id}

className={`
absolute
text-xl
cursor-pointer
transition-transform
${
selectedPacket?.id===packet.id?"scale-125":""}`}
onClick={()=>{

onPacketSelect(packet);
}}

>

📦

</div>

)


})

}

</>

)

}