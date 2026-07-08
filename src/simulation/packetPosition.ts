import { pathRegistry } from "./pathRegistry";


export function getPacketPosition(
connectionId:string,
progress:number,
reverse?:boolean
){


const path =
pathRegistry[connectionId];


if(!path){

return {
x:0,
y:0
};

}



const length =
path.getTotalLength();


const effectiveProgress =
reverse ? (1 - progress) : progress;


const point =
path.getPointAtLength(
length * effectiveProgress
);



return {

x:point.x,

y:point.y

};


}