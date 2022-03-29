/**
 * It formats a number into a currency format
 * @param number - The number to format.
 * @param [type=EGP] - The type of currency. Defaults to EGP.
 * @returns a string.
 */
const formatCurrency = (number, type = 'EGP') => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: type }).format(number);
};

export default formatCurrency;
