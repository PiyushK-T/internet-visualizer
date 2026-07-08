import { useState } from "react";

const steps = [
  "Request Created",
  "DNS Lookup",
  "TLS Handshake",
  "CDN Cache Check",
  "Load Balancing",
  "Server Processing",
  "Database Query",
  "Response Returned"
];

export default function Timeline() {
  // Optional active state tracker to hook into your overall layout simulation
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-bold border-b border-gray-800 pb-2 mb-6">
        Request Timeline
      </h2>

      <div className="relative pl-2 space-y-6">
        {/* Continuous Connecting Line Background */}
        <div className="absolute left-[13px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-green-500/50 via-gray-800 to-gray-800/20" />

        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`flex items-center gap-4 cursor-pointer group transition-colors duration-200 ${
                isActive ? "text-green-400" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              
              {/* Timeline Dot Indicator */}
              <div className="relative z-10 flex items-center justify-center">
                <div
                  className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-green-400 border-green-400 shadow-lg shadow-green-500/50 scale-125"
                      : isCompleted
                      ? "bg-gray-800 border-green-500/60"
                      : "bg-gray-950 border-gray-600 group-hover:border-gray-400"
                  }`}
                />
              </div>

              {/* Step Text Label */}
              <div className="flex flex-col">
                <span className={`text-sm font-medium ${isActive ? "font-semibold" : ""}`}>
                  {step}
                </span>
                {isActive && (
                  <span className="text-[11px] text-green-500/80 animate-pulse tracking-wide uppercase mt-0.5">
                    Processing...
                  </span>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}