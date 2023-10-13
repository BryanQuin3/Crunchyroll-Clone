export const isDataUpToDate = (dataTimestamp) => {
  const currentTimestamp = new Date().getTime();
  const yesterdayTimestamp = currentTimestamp - 24 * 60 * 60 * 1000;

  // Compara si el día de ayer es distinto al de hoy
  return (
    !dataTimestamp ||
    Math.floor(yesterdayTimestamp / (24 * 60 * 60 * 1000)) !==
      Math.floor(currentTimestamp / (24 * 60 * 60 * 1000))
  );
};
