export const convertCorrectDate = (dateString) => {
  const date = new Date(dateString);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
};

export const convertDateInAddMoney= (date) => {
  // const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set today's date to midnight

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Set tomorrow's date

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (date >= today && date < tomorrow) {
    // If the date is today
    return `Today ${day}/${month < 10 ? '0' + month : month}/${year}`;
  } else {
    // If the date is not today
    return `${day + 1}/${month < 10 ? '0' + month : month}/${year}`;
  }
}