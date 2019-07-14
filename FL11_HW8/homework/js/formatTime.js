formatTime(120);
formatTime(59);
formatTime(3601);

function formatTime(time) {
  let day, hour, min;
  min = Math.floor((time % (60 * 24)) % 60);
  hour = Math.floor((time % (60 * 24)) / 60);
  day = Math.floor(time / (60 * 24));
  return `${day} day(s) ${hour} hour(s) ${min} minute(s).`;
}