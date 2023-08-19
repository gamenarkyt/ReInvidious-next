export const secondsToTime = (time: number) => {
  const minutes = `${Math.floor(time / 60)}`.padStart(2, "0") as any;
  const seconds = `${time - minutes * 60}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
};
