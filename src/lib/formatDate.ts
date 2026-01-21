export function formatDate(date: string | Date, locale: string = "en-GB") {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
