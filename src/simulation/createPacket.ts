import type {
PacketData
}
from "./types";


import type {
SimulationStage
}
from "./stages";

import { connections } from "./connections";

export function createPacket(
stage:SimulationStage
):PacketData{

    const explicitMatch = connections.find(
        c=>c.from===stage.from && c.to===stage.to
    );

    const fallbackReverseMatch = connections.find(
        c=>c.from===stage.to && c.to===stage.from
    );

    const matchedConnection = explicitMatch ?? (stage.reverse ? fallbackReverseMatch : undefined);

    const connectionId = matchedConnection
        ? matchedConnection.id
        : `${stage.from}-${stage.to}`;

    const reverse = Boolean(stage.reverse);

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


connectionId,
reverse,
currentStep:0,
progress:0,
status:"moving",
size:"1 KB",


latency:Math.floor(
Math.random()*50+10
)


};


}