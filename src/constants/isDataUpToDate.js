export const isDataUpToDate = (dataTimestamp) => {
  const currentTimestamp = new Date().getTime();

  // Compara si el día de ayer es distinto al de hoy
  return (
    !dataTimestamp ||
    Math.floor(currentTimestamp / (24 * 60 * 60 * 1000)) >
      Math.floor(dataTimestamp / (24 * 60 * 60 * 1000))
  );
};
