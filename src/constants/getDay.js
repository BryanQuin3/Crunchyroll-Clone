export function getDay() {
  // Obtener el día de la semana
  const date = new Date();
  const day = date.getDay();
  // Obtener el nombre del día de la semana en ingles
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "other",
    "other",
  ];
  // Obtener el nombre del día anterior
  const yesterday = days[day - 1];
  const today = days[day];
  return [today, yesterday];
}
