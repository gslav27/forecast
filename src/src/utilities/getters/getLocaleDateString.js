/**
 * convert passed time value to locale date string or generate current one
 * @param {} data - numeric or string value of the time for the specified date
 * according to universal time
 * @return {string} locale date string
 */
export const getLocaleDateString = (data) => {
  const styles = {
    day: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
  };

  if (data) return new Date(data).toLocaleDateString('en-US', styles.day);

  /*
    if current time is 23hours+ return next day, otherwise return current day
    (due to openweather API implementation)
  */
  const now = new Date();
  return (now.getHours() < 23)
    ? now.toLocaleDateString('en-US', styles.day)
    : new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).toLocaleDateString('en-US', styles.day);
};
