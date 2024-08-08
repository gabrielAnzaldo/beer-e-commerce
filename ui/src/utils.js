export const handleize = (handle) =>
  handle && handle.toLowerCase ? handle.toLowerCase().replace(/ /g, "-") : "";
