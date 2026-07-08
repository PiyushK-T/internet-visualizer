import type { ConnectionData, NetworkNodeData } from "../../simulation/types";
import type { SimulationStage } from "../../simulation/stages";

interface Props {
  currentStage?: SimulationStage | null;
  selectedNode?: NetworkNodeData | null;
  selectedConnection?: ConnectionData | null;
}

function getLesson(stage?: SimulationStage | null) {
  if (!stage) {
    return {
      headline: "Every webpage you open is the result of a chain of small steps.",
      body:
        "Your browser asks for a page, the network finds the right server, and the response is assembled and sent back to you.",
      takeaway:
        "The internet works best when each part of the path understands its role and passes the request forward clearly."
    };
  }

  switch (stage.id) {
    case "dns-request":
      return {
        headline: "The browser needs an address before it can connect.",
        body:
          "DNS acts like the internet's address book. It translates a readable name like example.com into the numeric IP address that machines use.",
        takeaway:
          "Without DNS, the browser would not know where to send the request."
      };
    case "dns-response":
      return {
        headline: "The DNS server returns the destination address.",
        body:
          "Once the address is found, the browser can begin the real connection to the server that hosts the content.",
        takeaway:
          "This lookup is one of the first and most important steps in loading a website."
      };
    case "tcp-handshake":
    case "tls-handshake":
      return {
        headline: "The connection is being prepared safely.",
        body:
          "TCP creates a reliable channel, and TLS adds encryption so that data cannot be read by outsiders while it travels.",
        takeaway:
          "A secure website is not just about the page itself; it also depends on secure transport."
      };
    case "https-request":
    case "cdn-check":
      return {
        headline: "The request is moving through the network layers.",
        body:
          "The browser sends its request through the network, and content delivery systems may serve it from a nearby cache to make it faster.",
        takeaway:
          "The internet is optimized with layers and shortcuts so pages load quickly."
      };
    case "server-request":
    case "database-query":
    case "database-response":
      return {
        headline: "The server and database are assembling the response.",
        body:
          "The server processes the request and may ask a database for information before sending the final page back.",
        takeaway:
          "Many websites are built from small pieces that are gathered together at the moment you request them."
      };
    case "server-response":
    case "response":
    case "loadbalancer-response":
    case "router-loadbalancer-response":
    case "router-response":
      return {
        headline: "The final response is travelling back to the browser.",
        body:
          "The completed result moves back through the load balancer, edge router, and finally the browser so the page can be rendered.",
        takeaway:
          "The whole experience is a back-and-forth exchange between your device and remote systems."
      };
    default:
      return {
        headline: "This step is part of a larger journey.",
        body:
          "Every request is broken into stages so the system can route, protect, and process it reliably.",
        takeaway:
          "Understanding these stages makes the internet feel less mysterious and much easier to learn."
      };
  }
}

export default function Explanation({
  currentStage,
  selectedNode,
  selectedConnection
}: Props) {
  const lesson = getLesson(currentStage);

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-950/80 p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">How the Internet Works</h2>
        {/* <span className="rounded-full border border-emerald-700/40 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-400">
          Learn as you watch
        </span> */}
      </div>

      <p className="text-sm text-gray-400">{lesson.headline}</p>

      <div className="rounded-lg border border-blue-700/30 bg-blue-950/30 p-3">
        <p className="text-sm font-semibold text-blue-300">
          {currentStage?.label ?? "Web request journey"}
        </p>
        <p className="mt-1 text-sm text-gray-300">{lesson.body}</p>
      </div>

      <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-3">
        <p className="text-sm font-semibold text-gray-200">Why it matters</p>
        <p className="mt-1 text-sm text-gray-400">{lesson.takeaway}</p>
      </div>

      <div className="space-y-2 text-sm text-gray-400">
        <div className="rounded border border-gray-800 p-2">
          <span className="font-medium text-gray-200">Focus:</span>{" "}
          {selectedNode ? selectedNode.title : "No node selected yet"}
        </div>
        {selectedConnection && (
          <div className="rounded border border-gray-800 p-2">
            <span className="font-medium text-gray-200">Connection:</span>{" "}
            {selectedConnection.label}
          </div>
        )}
      </div>
    </div>
  );
}
