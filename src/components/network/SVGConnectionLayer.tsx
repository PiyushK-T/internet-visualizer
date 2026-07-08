import { nodePositions } from "../../simulation/layout";
import { connections } from "../../simulation/connections";
import type { ConnectionData } from "../../simulation/types";
import { pathRegistry } from "../../simulation/pathRegistry";

interface Props {
  activeConnection?: string | null;
  onConnectionSelect: (connection: ConnectionData) => void;
}


const NODE_HEIGHT = 112;


export default function SVGConnectionLayer({
  activeConnection,
  onConnectionSelect
}: Props) {


  function getPoint(id:string){
    return nodePositions[id];
  }



  function createPath(
    from:string,
    to:string
  ){

    const start=getPoint(from);
    const end=getPoint(to);


    const middleY =
      (start.y + end.y) / 2;


    return `
      M ${start.x} ${start.y + NODE_HEIGHT/2}
      C
      ${start.x} ${middleY},
      ${end.x} ${middleY},
      ${end.x} ${end.y - NODE_HEIGHT/2}
    `;
  }



  return (

    <svg

      className="
        absolute
        top-0
        left-0
      "

      width="1200"

      height="1200"

    >


      <defs>

        <filter id="glow">

          <feGaussianBlur
            stdDeviation="6"
          />

        </filter>

      </defs>



      {
        connections.map(connection=>{

          const active =
            activeConnection === connection.id;


          const path =
            createPath(
              connection.from,
              connection.to
            );


          return (

            <g
              key={connection.id}
            >


              {/* Active glow */}
              {
                active &&

                <path

                  d={path}

                  fill="none"

                  stroke="#22c55e"

                  strokeWidth="14"

                  opacity="0.35"

                  filter="url(#glow)"

                />

              }



              {/* Main cable */}

              <path

                id={connection.id}

                ref={(element)=>{

                if(element){

                pathRegistry[connection.id] = element;

                }

                }}
                
                d={path}

                fill="none"

                stroke={
                  active
                  ? "#22c55e"
                  : "#475569"
                }

                strokeWidth={
                  active
                  ? 6
                  : 3
                }

                pointerEvents="stroke"

                cursor="pointer"

                // className="
                //   pointer-events-auto
                //   cursor-pointer
                // "

                onClick={()=>
                  onConnectionSelect(connection)
                }

              />



            </g>

          )

        })
      }


    </svg>

  )

}