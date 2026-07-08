import { useEffect, useState } from "react";
import { requestStages } from "./stages";
import { createPacket } from "./createPacket";
import type { PacketData } from "./types";


export function useSimulation(
  setPackets: React.Dispatch<
    React.SetStateAction<PacketData[]>
  >
) {


const [currentStage,setCurrentStage]
=
useState(0);


const [running,setRunning]
=
useState(false);



function start(){

setPackets([]);


setCurrentStage(0);


setRunning(true);


}



function nextStage(){


if(currentStage >= requestStages.length - 1){

setRunning(false);

return;

}



const stage =
requestStages[currentStage];



const packet =
createPacket(stage);



setPackets(prev=>[

...prev,

packet

]);



setCurrentStage(prev=>prev+1);


}



useEffect(()=>{


if(!running)
return;



const timer =
setInterval(()=>{

nextStage();


},3000);



return ()=>clearInterval(timer);



},[
running,
currentStage
]);



return {


running,


currentStage,


stage:
requestStages[currentStage],


start,


nextStage

};


}