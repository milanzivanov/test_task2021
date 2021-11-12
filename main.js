// code from stackOverflow
// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(day, month, year) {
  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}

$(document).ready(function () {
  $("#validation-button").click(function () {
    const dayFrom = $("#day-input-from").val();
    const monthFrom = $("#month-input-from").val();
    const yearFrom = $("#year-input-from").val();

    const dayTo = $("#day-input-to").val();
    const monthTo = $("#month-input-to").val();
    const yearTo = $("#year-input-to").val();

    if (!isValidDate(dayFrom, monthFrom, yearFrom)) {
      alert("Invalid from date");
      $("#day-input-from").val('');
      $("#month-input-from").val('');
      $("#year-input-from").val('')
      return;
    }
    if (!isValidDate(dayTo, monthTo, yearTo)) {
      alert("Invalid to date");
      $("#day-input-to").val('');
      $("#month-input-to").val('');
      $("#year-input-to").val('');
      return;
    }

    const fromDate = new Date(yearFrom, monthFrom, dayFrom);
    const toDate = new Date(yearTo, monthTo, dayTo);

    if (fromDate > toDate) {
      alert("To date must be greater then from date");
      return;
    }

    else {
        alert('Validation is valid!!!')
    }

  });
});
