export default function Inspector(){

return (

<div
className="
space-y-5
"
>


<h2
className="
text-lg
font-bold
"
>
Network Inspector
</h2>



<div
className="
bg-gray-950
border
border-gray-800
rounded-xl
p-4
"
>

<h3
className="
font-bold
mb-3
"
>
Current Activity
</h3>


<p className="text-gray-400">
Waiting for simulation...
</p>


</div>





<div
className="
bg-gray-950
border
border-gray-800
rounded-xl
p-4
"
>


<h3
className="
font-bold
mb-3
"
>
Packet Information
</h3>


<div
className="
text-sm
text-gray-400
space-y-2
"
>

<p>
Packet: None
</p>

<p>
Protocol: -
</p>

<p>
Source: -
</p>

<p>
Destination: -
</p>


</div>


</div>





<div
className="
bg-gray-950
border
border-gray-800
rounded-xl
p-4
"
>

<h3
className="
font-bold
mb-3
"
>
HTTP Headers
</h3>


<p className="
text-gray-400
text-sm
"
>
No request yet
</p>


</div>



</div>

)

}