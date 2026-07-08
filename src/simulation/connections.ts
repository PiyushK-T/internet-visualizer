import type { ConnectionData } from "./types";


export const connections: ConnectionData[] = [

{
id:"browser-dns",
from:"browser",
to:"dns",
label:"DNS Query",
protocol:"UDP",
description:"Browser asks DNS server to resolve a domain name."
},


{
id:"dns-cdn",
from:"dns",
to:"cdn",
label:"IP Resolution",
protocol:"DNS",
description:"DNS returns the IP address of the requested service."
},


{
id:"cdn-loadbalancer",
from:"cdn",
to:"loadbalancer",
label:"HTTPS Request",
protocol:"HTTPS",
description:"CDN forwards requests that are not available in cache."
},


{
id:"loadbalancer-server1",
from:"loadbalancer",
to:"server1",
label:"Traffic Route",
protocol:"HTTP",
description:"Load balancer forwards traffic to Server 1."
},


{
id:"loadbalancer-server2",
from:"loadbalancer",
to:"server2",
label:"Traffic Route",
protocol:"HTTP",
description:"Load balancer forwards traffic to Server 2."
},


{
id:"server1-database",
from:"server1",
to:"database",
label:"Database Query",
protocol:"SQL",
description:"Application server requests data from database."
},


{
id:"server2-database",
from:"server2",
to:"database",
label:"Database Query",
protocol:"SQL",
description:"Application server requests data from database."
}

];