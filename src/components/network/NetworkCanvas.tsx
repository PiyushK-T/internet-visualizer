import NetworkNode from "./NetworkNode";
import Connection from "./Connection";


export default function NetworkCanvas(){

return (


<div
className="
h-full
w-full
relative
flex
items-center
justify-center
overflow-hidden
bg-[#080808]
"
>

<div
className="
absolute
inset-0
opacity-20
"
style={{
backgroundImage:
"linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg,#333 1px,transparent 1px)",
backgroundSize:"40px 40px"
}}
/>


<div
className="
flex
flex-col
items-center
gap-2
"
>



<NetworkNode

icon="💻"

title="Browser"

description="User device requesting a website"

/>


<Connection/>




<NetworkNode

icon="🌐"

title="DNS Server"

description="Converts domain names into IP addresses"

/>


<Connection/>




<NetworkNode

icon="⚡"

title="CDN"

description="Caches content closer to users"

/>


<Connection/>




<NetworkNode

icon="⚖️"

title="Load Balancer"

description="Distributes incoming requests"

/>



<Connection/>



<div
className="
flex
gap-8
"
>


<NetworkNode

icon="🖥️"

title="Server 1"

description="Processes requests"

/>


<NetworkNode

icon="🖥️"

title="Server 2"

description="Processes requests"

/>


</div>



<Connection/>


<NetworkNode

icon="🗄️"

title="Database"

description="Stores application data"

/>



</div>


</div>

)

}