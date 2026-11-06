export function formatDuration(seconds: number) {
  return `${Math.round(seconds / 60)} min`;
}