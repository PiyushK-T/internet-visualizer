export interface SimulationStage {

    id:string;

    label:string;

    description:string;

    protocol:string;

    from:string;

    to:string;

}


export const requestStages:SimulationStage[] = [

{
id:"dns-request",

label:"DNS Query",

description:
"Browser asks DNS resolver for the IP address of example.com",

protocol:"DNS",

from:"browser",

to:"dns"

},


{
id:"dns-response",

label:"DNS Response",

description:
"DNS server returns the IP address",

protocol:"DNS",

from:"dns",

to:"browser"

},


{
id:"tcp-handshake",

label:"TCP Handshake",

description:
"Browser establishes a reliable connection",

protocol:"TCP",

from:"browser",

to:"server1"

},


{
id:"tls-handshake",

label:"TLS Handshake",

description:
"Browser negotiates encrypted communication",

protocol:"TLS",

from:"browser",

to:"server1"

},


{
id:"https-request",

label:"HTTPS Request",

description:
"Browser sends encrypted HTTP request",

protocol:"HTTPS",

from:"browser",

to:"cdn"

},


{
id:"cdn-check",

label:"CDN Cache Lookup",

description:
"CDN checks if content is already cached",

protocol:"HTTPS",

from:"cdn",

to:"loadbalancer"

},


{
id:"server-request",

label:"Server Processing",

description:
"Application server processes request",

protocol:"HTTPS",

from:"loadbalancer",

to:"server1"

},


{
id:"database-query",

label:"Database Query",

description:
"Server requests required data",

protocol:"SQL",

from:"server1",

to:"database"

},


{
id:"response",

label:"Response",

description:
"Server sends webpage back",

protocol:"HTTPS",

from:"server1",

to:"browser"

}

];