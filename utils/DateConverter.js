export const convertCorrectDate = (dateString) => {
  const date = new Date(dateString);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
};
