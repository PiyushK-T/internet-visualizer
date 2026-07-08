import {
requestStages
} from "./stages";


export function getCurrentStage(
index:number
){

return requestStages[index];

}



export function getTotalStages(){

return requestStages.length;

}