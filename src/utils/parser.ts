export const dateLocal = (dateString: string) => {
  return new Date(dateString).toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

export const abbreviateNumber = (number: number): string => {
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(("" + number).length / 3);
  let shortValue: number | string = parseFloat(
    (suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
      2
    )
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};
