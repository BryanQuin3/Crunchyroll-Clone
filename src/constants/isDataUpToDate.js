export const isDataUpToDate = (dataTimestamp) => {
  const oneDayInMillis = 24 * 60 * 60 * 1000;
  const currentTime = new Date().getTime();
  return dataTimestamp && currentTime - dataTimestamp < oneDayInMillis;
};
