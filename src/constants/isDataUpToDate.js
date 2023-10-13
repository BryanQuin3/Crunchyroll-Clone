export const isDataUpToDate = (dataTimestamp) => {
  // Obtén la hora actual
  const currentTime = new Date();

  // Establece la hora en la que es medianoche (00:00) del día actual
  const midnightTime = new Date(currentTime);
  midnightTime.setHours(0, 0, 0, 0);

  if (currentTime - dataTimestamp < 0) {
    // Si dataTimestamp está en el futuro, no está actualizado
    return false;
  } else {
    // Compara dataTimestamp con la hora de medianoche
    return dataTimestamp >= midnightTime.getTime();
  }
};
