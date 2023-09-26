export const isoDateToLocaleDateTime = (isoDateString: string) => {
  // Parse ISO date string into a Date object
  const isoDate = new Date(isoDateString);

  // Define your desired locale and options
  const locale = "en-US"; // Adjust this to your desired locale
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  } as const;

  // Create Intl.DateTimeFormat object
  const dateFormatter = new Intl.DateTimeFormat(locale, options);

  // Format the date into a locale date-time string
  return dateFormatter.format(isoDate);
};
