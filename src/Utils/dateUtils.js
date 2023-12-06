import dayjs from "dayjs";

export const getWeekDateRange = (inputDate, weekStart) => {

  const weekStartPadding = {
    sun: 1,
    mon: 2,
    tue: 3,
    wed: 4,
    thu: 5,
    fri: 6,
    sat: 6
  }
  // Clone the input date to avoid modifying the original date
  const date = new Date(inputDate);
  console.log(date)

  // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const dayOfWeek = date.getDay();

  // Calculate the difference between the current day and the start of the week (Sunday)
  const diff = date.getDate() - dayOfWeek + weekStartPadding[weekStart];


  // Set the date to the start of the week (Sunday)
  const startOfWeek = new Date(date.setDate(diff));

  // Calculate the end of the week (Saturday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  // Format the dates as strings
  // console.log(date.format('DD-MM-YYYY'))
  const formattedStartOfWeek = dayjs(startOfWeek.toISOString().split('T')[0]);
  const formattedEndOfWeek = dayjs(endOfWeek.toISOString().split('T')[0]);



  return {
    startOfWeek: formattedStartOfWeek.format('DD MMM, YYYY'),
    endOfWeek: formattedEndOfWeek.format('DD MMM,YYYY')
  };
}

export const getDayShortName = (day) => {
  switch (day) {
    case 0:
      return 'Sun'
    case 1:
      return 'Mon'
    case 2:
      return 'Tue'
    case 3:
      return 'Wed'
    case 4:
      return 'Thu'
    case 5:
      return 'Fri'
    case 6:
      return 'Sat'
  }
}

