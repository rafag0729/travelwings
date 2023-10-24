
export const currencyMoneyDots = (value: string) => {
  return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}