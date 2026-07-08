export interface NodePosition {
  x:number;
  y:number;
}


export const nodePositions:Record<string,NodePosition> = {

browser:{
x:600,
y:100
},


dns:{
x:600,
y:280
},


cdn:{
x:600,
y:460
},


loadbalancer:{
x:600,
y:640
},


server1:{
x:350,
y:850
},


server2:{
x:850,
y:850
},


database:{
x:600,
y:1080
}

};