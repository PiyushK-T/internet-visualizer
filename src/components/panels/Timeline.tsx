import { requestStages } from "../../simulation/stages";

interface Props {
  currentStepIndex?: number;
}

export default function Timeline({ currentStepIndex = 0 }: Props) {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-bold border-b border-gray-800 pb-2 mb-4">
        Request Timeline
      </h2>

      {/* <p className="mb-4 text-sm text-gray-400">
        Each step is part of the journey that delivers a page to your browser.
      </p> */}

      <div className="relative pl-2 space-y-6">
        <div className="absolute left-[13px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-green-500/50 via-gray-800 to-gray-800/20" />

        {requestStages.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;

          return (
            <div
              key={step.id}
              className={`flex items-center gap-4 transition-colors duration-200 ${
                isActive ? "text-green-400" : "text-gray-400"
              }`}
            >
              <div className="relative z-10 flex items-center justify-center">
                <div
                  className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-green-400 border-green-400 shadow-lg shadow-green-500/50 scale-125"
                      : isCompleted
                      ? "bg-gray-800 border-green-500/60"
                      : "bg-gray-950 border-gray-600"
                  }`}
                />
              </div>

              <div className="flex flex-col">
                <span className={`text-sm font-medium ${isActive ? "font-semibold" : ""}`}>
                  {step.label}
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