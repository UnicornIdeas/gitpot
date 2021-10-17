const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function formatDate(date) {
  const d = new Date(date);
  const m = months[d.getMonth()];
  return `${m} ${d.getDate()}, ${d.getFullYear()}`;
}

export function getUserPhoto(username) {
  return `https://avatars.githubusercontent.com/${username}`;
}
