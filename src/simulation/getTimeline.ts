// simulation/getTimeline.ts
import { timelineSteps, type TimelineStep } from "./timeline";

export interface ActiveTimelineItem extends TimelineStep {
  isActive: boolean;
  isCompleted: boolean;
}

export function getTimeline(currentStepIndex: number): ActiveTimelineItem[] {
  return timelineSteps.map((step) => {
    let isActive = false;
    let isCompleted = false;

    switch (step.id) {
      case "browser":
        isActive = currentStepIndex === 2 || currentStepIndex === 3 || currentStepIndex === 12;
        isCompleted = currentStepIndex > 3 && currentStepIndex < 12;
        break;

      case "dns-query":
        // STRICT: Only active on the absolute first stage
        isActive = currentStepIndex === 0;
        isCompleted = currentStepIndex > 0;
        break;

      case "dns-response":
        // STRICT: Only active on the second stage
        isActive = currentStepIndex === 1;
        isCompleted = currentStepIndex > 1;
        break;

      case "cdn":
        isActive = currentStepIndex === 4;
        isCompleted = currentStepIndex > 4;
        break;

      case "edge-opt":
        isActive = currentStepIndex === 5;
        isCompleted = currentStepIndex > 5;
        break;

      case "server":
        isActive = currentStepIndex === 6 || currentStepIndex === 7 || currentStepIndex === 10 || currentStepIndex === 11;
        isCompleted = currentStepIndex > 7 && currentStepIndex < 10;
        break;

      case "database":
        isActive = currentStepIndex === 8 || currentStepIndex === 9;
        isCompleted = currentStepIndex > 9;
        break;
    }

    return {
      ...step,
      isActive,
      isCompleted
    };
  });
}