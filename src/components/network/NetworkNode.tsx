interface Props {
    icon:string;
    title:string;
    description:string;
}


export default function NetworkNode({
    icon,
    title,
    description
}:Props){

return (

<div
className="
w-72
h-28
rounded-xl
border
border-gray-700
bg-gray-950
flex
items-center
px-5
gap-5
shadow-lg
hover:border-green-400
transition
"
>


<div
className="
text-5xl
"
>
{icon}
</div>



<div>

<h2
className="
font-bold
text-lg
"
>
{title}
</h2>


<p
className="
text-sm
text-gray-400
"
>
{description}
</p>


</div>


</div>

)

}