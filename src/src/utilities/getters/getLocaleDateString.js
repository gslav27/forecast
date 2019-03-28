/**
 * convert passed time value to locale date string or generate current one
 * @param {} data - numeric or string value of the time for the specified date
 * according to universal time
 * @return {string} locale date string
 */
export const getLocaleDateString = (data = new Date()) => {
  const styles = {
    day: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
  };
  return new Date(data).toLocaleDateString('en-US', styles.day);
};
