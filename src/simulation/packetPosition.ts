import { pathRegistry } from "./pathRegistry";


export function getPacketPosition(
connectionId:string,
progress:number
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



const point =
path.getPointAtLength(
length * progress
);



return {

x:point.x,

y:point.y

};


}