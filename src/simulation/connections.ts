import type { ConnectionData } from "./types";

export const connections: ConnectionData[] = [
  {
    id: "browser-dns",
    from: "browser",
    to: "dns",
    label: "DNS Query",
    protocol: "UDP",
    description: "The client asks the DNS resolver for the destination address."
  },
  {
    id: "browser-router",
    from: "browser",
    to: "router",
    label: "TCP / TLS Handshake",
    protocol: "TCP",
    description: "The client opens a secure session with the network edge."
  },
  {
    id: "router-cdn",
    from: "router",
    to: "cdn",
    label: "Edge Request",
    protocol: "HTTPS",
    description: "The router forwards the request to the CDN for cached content."
  },
  {
    id: "router-loadbalancer",
    from: "router",
    to: "loadbalancer",
    label: "Backend Forward",
    protocol: "HTTPS",
    description: "The router passes the request to the load balancer."
  },
  {
    id: "loadbalancer-server1",
    from: "loadbalancer",
    to: "server1",
    label: "Traffic Route",
    protocol: "HTTP",
    description: "The load balancer forwards traffic to the web server."
  },
  {
    id: "loadbalancer-server2",
    from: "loadbalancer",
    to: "server2",
    label: "Traffic Route",
    protocol: "HTTP",
    description: "The load balancer forwards traffic to the application server."
  },
  {
    id: "server1-database",
    from: "server1",
    to: "database",
    label: "Database Query",
    protocol: "SQL",
    description: "The web server requests the data it needs from the database."
  },
  {
    id: "server2-database",
    from: "server2",
    to: "database",
    label: "Database Query",
    protocol: "SQL",
    description: "The application server requests supporting data from the database."
  }
];