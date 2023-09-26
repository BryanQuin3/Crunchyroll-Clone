export function getDay() {
  // Obtener el día de la semana
  const date = new Date();
  const day = date.getDay();
  // Obtener el nombre del día de la semana en ingles
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "other",
    "other",
  ];
  const dayName = days[day - 1];
  return dayName;
}
