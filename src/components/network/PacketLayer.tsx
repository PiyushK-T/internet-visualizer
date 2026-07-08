import type {PacketData} from "../../simulation/types";
import {getPacketPosition} from "../../simulation/packetPosition";


interface Props{
packets:PacketData[];
selectedPacket:PacketData|null;
onPacketSelect:(packet:PacketData|null)=>void;
pathVersion?: number;
}


export default function PacketLayer({
packets,
selectedPacket,
onPacketSelect,
pathVersion = 0
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
packet.progress,
packet.reverse
);



const colorClass = packet.reverse ? "bg-green-400" : "bg-blue-400";
const glowClass = packet.reverse ? "shadow-green-400/70" : "shadow-blue-400/70";

return (

<div

key={`${packet.id}-${pathVersion}`}

className={`
absolute
h-4
w-4
rounded-full
border
border-white/70
shadow-lg
cursor-pointer
transition-transform
${colorClass}
${glowClass}
${
selectedPacket?.id===packet.id?"scale-125":""}`}
style={{
left: `${position.x}px`,
top: `${position.y}px`,
transform: "translate(-50%, -50%)",
}}
onClick={()=>{

onPacketSelect(packet);
}}

>
</div>

)


})

}

</>

)

}