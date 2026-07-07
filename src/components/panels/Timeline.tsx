const steps=[
"Request Created",
"DNS Lookup",
"TLS Handshake",
"CDN Cache Check",
"Load Balancing",
"Server Processing",
"Database Query",
"Response Returned"
]


export default function Timeline(){

return (

<div>


<h2
className="
text-lg
font-bold
mb-6
"
>
Request Timeline
</h2>



<div
className="
space-y-5
"
>

{
steps.map(
(step,index)=>(

<div
key={index}
className="
flex
items-center
gap-3
text-gray-400
"
>


<div
className="
w-3
h-3
rounded-full
border
border-gray-600
"
/>


<span>
{step}
</span>


</div>

)

)
}


</div>


</div>

)

}