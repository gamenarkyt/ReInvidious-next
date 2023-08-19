export const roundViews = (value: number, extendedVersion: boolean = false) => {
  const valueLength = value.toString().length;

  if (extendedVersion) {
    if (valueLength >= 7) {
      return `${(value / 1000000).toFixed(3)}M`;
    }
    if (valueLength <= 6) {
      return `${(value / 1000).toFixed(3)}K`;
    }
  }

  if (valueLength >= 7) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (valueLength >= 4) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  if (valueLength) {
    return value;
  }
};
