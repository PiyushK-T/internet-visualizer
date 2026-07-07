import Timeline from "../panels/Timeline";
import Inspector from "../panels/Inspector";
import NetworkCanvas from "../network/NetworkCanvas";
import BottomControls from "./BottomControls";


export default function SimulatorLayout(){

return (

<div
className="
h-screen
w-screen
overflow-hidden
bg-[#050505]
text-white
flex
flex-col
"
>


{/* HEADER */}

<header
className="
h-16
border-b
border-gray-800
flex
items-center
justify-between
px-6
"
>

<h1
className="
text-2xl
font-bold
"
>
Internet Visualizer
</h1>


<div
className="
text-sm
text-green-400
"
>
Simulation Ready
</div>


</header>





{/* MAIN WORKSPACE */}

<div
className="
flex-1
flex
overflow-hidden
"
>


{/* LEFT */}

<section
className="
w-72
border-r
border-gray-800
p-4
"
>

<Timeline/>

</section>





{/* CENTER */}

<section
className="
flex-1
relative
"
>

<NetworkCanvas/>

</section>





{/* RIGHT */}

<section
className="
w-96
border-l
border-gray-800
p-4
"
>

<Inspector/>

</section>


</div>





{/* BOTTOM */}

<BottomControls/>


</div>

)

}