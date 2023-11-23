function usePrevious(val) {
  if (day === "Monday") {
    setDay("Friday");
  } else if (day === "Friday") {
    setDay("Thursday");
  } else if (day === "Thusday") {
    setDay("Wednesday");
  } else if (day === "Wednesday") {
    setDay("Tuesday");
  } else if (day === "Tuesday") {
    setDay("Monday");
  }
}
