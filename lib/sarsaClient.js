// helper for mapping action to label
export const actionLabel = (a) => {
  if (a === 0) return "Decrease";
  if (a === 1) return "Hold";
  if (a === 2) return "Increase";
  return String(a);
};
