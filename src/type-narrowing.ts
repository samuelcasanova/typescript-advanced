export function narrowingByType(
  rawStepDuration: string | number
): number {
  if (typeof rawStepDuration === "string") {
    const splitAmountAndUnit = rawStepDuration.match(
      /(?<amount>\d*\.?\d+)\s*(?<unit>[a-zA-Z]+)$/
    );

    if (splitAmountAndUnit) {
      return parseFloat(splitAmountAndUnit.groups?.amount || "0");
    }

    return 0;
  }

  return rawStepDuration / 1000 / 60;
}

export function narrowingByInstancePropertyValue(step: VideoStep | QuizStep) {
  if (step.type === "video") {
    return step.durationInMillis / 1000;
  }

  return step.questions.length * 50;
}

export function narrowingByClassProperty(step: VideoStep | QuizStep) {
  if ("durationInMillis" in step) {
    return step.durationInMillis / 1000 / 60;
  }

  return step.questions.length * 3;
}