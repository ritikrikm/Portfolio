const formatRelativeTime = (isoString) => {
  const diff = Date.now() - new Date(isoString).getTime();
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  if (diff < minute) return "now";
  if (diff < hour) return `${Math.floor(diff / minute)}m`;
  if (diff < day) return `${Math.floor(diff / hour)}h`;
  if (diff < week) return `${Math.floor(diff / day)}d`;
  return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};
export default formatRelativeTime;