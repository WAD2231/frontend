export default function formatDate(isoDate) {
  const date = new Date(isoDate);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
