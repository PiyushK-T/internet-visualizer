export interface SimulationStage {
  id: string;
  label: string;
  description: string;
  protocol: string;
  from: string;
  to: string;
  reverse?: boolean;
}

export const requestStages: SimulationStage[] = [
  {
    id: "dns-request",
    label: "DNS Query",
    description: "The client asks the DNS resolver for the IP address of example.com",
    protocol: "DNS",
    from: "browser",
    to: "dns"
  },
  {
    id: "dns-response",
    label: "DNS Response",
    description: "The DNS server returns the resolved address",
    protocol: "DNS",
    from: "browser",
    to: "dns",
    reverse: true
  },
  {
    id: "tcp-handshake",
    label: "TCP Handshake",
    description: "The client establishes a reliable session with the edge router",
    protocol: "TCP",
    from: "browser",
    to: "router"
  },
  {
    id: "tls-handshake",
    label: "TLS Handshake",
    description: "The client negotiates encrypted communication with the network edge",
    protocol: "TLS",
    from: "browser",
    to: "router"
  },
  {
    id: "https-request",
    label: "HTTPS Request",
    description: "The request is forwarded to the CDN edge for processing",
    protocol: "HTTPS",
    from: "router",
    to: "cdn"
  },
  {
    id: "cdn-check",
    label: "CDN Cache Lookup",
    description: "The CDN checks whether the content is already cached nearby and returns the result toward the router",
    protocol: "HTTPS",
    from: "router",
    to: "cdn",
    reverse: true
  },
  {
    id: "router-loadbalancer-request",
    label: "Router to Load Balancer",
    description: "The router forwards the request to the load balancer for backend distribution",
    protocol: "HTTPS",
    from: "router",
    to: "loadbalancer"
  },
  {
    id: "server-request",
    label: "Server Processing",
    description: "The load balancer routes the request to the web server tier",
    protocol: "HTTPS",
    from: "loadbalancer",
    to: "server1"
  },
  {
    id: "database-query",
    label: "Database Query",
    description: "The web server requests the required data from the database",
    protocol: "SQL",
    from: "server1",
    to: "database"
  },
  {
    id: "database-response",
    label: "Database Response",
    description: "The database returns the requested rows to the application server",
    protocol: "SQL",
    from: "server1",
    to: "database",
    reverse: true
  },
  {
    id: "server-response",
    label: "Server Response",
    description: "The application server packages the result and sends it back through the load balancer",
    protocol: "HTTPS",
    from: "loadbalancer",
    to: "server1",
    reverse: true
  },
  {
    id: "loadbalancer-response",
    label: "Load Balancer Response",
    description: "The load balancer forwards the completed response toward the edge router",
    protocol: "HTTPS",
    from: "router",          // FIXED: Correct layout matching key pair
    to: "loadbalancer",      // FIXED: Correct layout matching key pair
    reverse: true
  },
  {
    id: "router-response",
    label: "Browser Response",
    description: "The edge router returns the completed page to the browser for rendering",
    protocol: "HTTPS",
    from: "browser",         // FIXED: Correct layout matching key pair
    to: "router",            // FIXED: Correct layout matching key pair
    reverse: true
  },
];