import type { NetworkNodeData } from "./types";

export const networkNodes: NetworkNodeData[] = [
  {
    id: "browser",
    title: "Client / Browser",
    icon: "💻",
    description: "User device initiating the request",
    type: "browser",
    details: {
      purpose: "Creates HTTP requests and renders the website",
      technology: "Chrome, Firefox, Safari",
      example: "GET https://example.com"
    }
  },
  {
    id: "dns",
    title: "DNS Resolver",
    icon: "🌐",
    description: "Translates domain names into IP addresses",
    type: "dns",
    details: {
      purpose: "Finds the server location of a website",
      technology: "DNS Protocol",
      example: "example.com → 93.184.216.34"
    }
  },
  {
    id: "router",
    title: "Edge Router",
    icon: "🧭",
    description: "Routes traffic into the correct service layer",
    type: "router",
    details: {
      purpose: "Directs traffic between the client and the network edge",
      technology: "Routing Protocols / Firewalling",
      example: "Forward to CDN or backend"
    }
  },
  {
    id: "cdn",
    title: "CDN Edge",
    icon: "⚡",
    description: "Serves cached content closer to the user",
    type: "cdn",
    details: {
      purpose: "Reduces latency using cached content",
      technology: "CloudFront, Cloudflare",
      example: "Image served from a nearby edge node"
    }
  },
  {
    id: "loadbalancer",
    title: "Load Balancer",
    icon: "⚖️",
    description: "Distributes traffic across application servers",
    type: "loadbalancer",
    details: {
      purpose: "Prevents servers from becoming overloaded",
      technology: "Nginx, AWS ELB, HAProxy",
      example: "Request routed to Web Server 1"
    }
  },
  {
    id: "server1",
    title: "Web Server",
    icon: "🖥️",
    description: "Handles application and web responses",
    type: "server",
    details: {
      purpose: "Runs core application logic",
      technology: "Node.js / Express / Docker",
      example: "Generate runtime webpage response"
    }
  },
  {
    id: "server2",
    title: "App Server",
    icon: "🧩",
    description: "Processes backend application requests",
    type: "server",
    details: {
      purpose: "Handles horizontally scaled system traffic",
      technology: "Node.js / Express / Docker",
      example: "Process API request instance"
    }
  },
  {
    id: "database",
    title: "Database Cluster",
    icon: "🗄️",
    description: "Stores persistent application data",
    type: "database",
    details: {
      purpose: "Stores records like users and transactions",
      technology: "PostgreSQL / MongoDB",
      example: "SELECT * FROM users WHERE id = 42;"
    }
  }
];