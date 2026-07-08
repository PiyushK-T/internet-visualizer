import type {
PacketData
}
from "./types";


import type {
SimulationStage
}
from "./stages";



export function createPacket(
stage:SimulationStage
):PacketData{


return {


id:
crypto.randomUUID(),


protocol:
stage.protocol as any,


source:
stage.from,


destination:
stage.to,


route:[
stage.from,
stage.to
],


connectionId:
`${stage.from}-${stage.to}`,


currentStep:0,


progress:0,


status:"moving",


size:"1 KB",


latency:Math.floor(
Math.random()*50+10
)


};


}