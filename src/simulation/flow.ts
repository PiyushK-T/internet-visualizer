import type { NetworkNodeData } from "./types";

export const networkNodes: NetworkNodeData[] = [
  {
    id: "browser",
    title: "Browser",
    icon: "💻",
    description: "User device requesting a website",
    type: "browser",
    details: {
      purpose: "Creates HTTP requests and displays websites",
      technology: "Chrome, Firefox, Safari",
      example: "GET https://example.com"
    }
  },
  {
    id: "dns",
    title: "DNS Server",
    icon: "🌐",
    description: "Converts domains into IP addresses",
    type: "dns",
    details: {
      purpose: "Finds the server location of a website",
      technology: "DNS Protocol",
      example: "example.com → 93.184.216.34"
    }
  },
  {
    id: "cdn",
    title: "CDN",
    icon: "⚡",
    description: "Stores content closer to users",
    type: "cdn",
    details: {
      purpose: "Reduces latency using cached content",
      technology: "CloudFront, Cloudflare",
      example: "Image served from nearby edge server"
    }
  },
  {
    id: "loadbalancer",
    title: "Load Balancer",
    icon: "⚖️",
    description: "Distributes incoming traffic across multiple servers",
    type: "loadbalancer",
    details: {
      purpose: "Prevents servers from becoming overloaded",
      technology: "Nginx, AWS ELB, HAProxy",
      example: "Request routed to Server 2 (Round Robin)"
    }
  },
  {
    id: "server1",
    title: "Server 1",
    icon: "🖥️",
    description: "Primary application processing node",
    type: "server",
    details: {
      purpose: "Runs core application logic",
      technology: "Node.js / Express / Docker",
      example: "Generate runtime webpage response"
    }
  },
  {
    id: "server2",
    title: "Server 2",
    icon: "🖥️",
    description: "Secondary application processing node",
    type: "server",
    details: {
      purpose: "Handles horizontally scaled system traffic",
      technology: "Node.js / Express / Docker",
      example: "Process API request instance"
    }
  },
  {
    id: "database",
    title: "Database",
    icon: "🗄️",
    description: "Stores application data",
    type: "database",
    details: {
      purpose: "Stores persistent records like users and transactions",
      technology: "PostgreSQL / MongoDB",
      example: "SELECT * FROM users WHERE id = 42;"
    }
  }
];