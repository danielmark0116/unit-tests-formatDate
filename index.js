const formatDate = timeInSeconds => {
  if (!timeInSeconds) return '0s';

  const secondsRemaining = Math.floor(timeInSeconds % 60);
  const minutes = Math.floor(timeInSeconds / 60);
  const minutesRemaining = Math.floor(minutes % 60);
  const hours = Math.floor(minutes / 60);

  if (timeInSeconds > 60 * 60) {
    return `${hours}h${minutesRemaining === 0 ? '' : ` ${minutesRemaining}m`}${
      secondsRemaining === 0 ? '' : ` ${secondsRemaining}s`
    }`;
  }

  if (timeInSeconds > 60) {
    return `${minutes}m${
      secondsRemaining === 0 ? '' : ' ' + secondsRemaining + 's'
    }`;
  }

  return `${timeInSeconds}s`;
};

module.exports = formatDate;
