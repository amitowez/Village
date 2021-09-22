// eslint-disable-next-line import/prefer-default-export
export const getSelectedItemTextParams = ({ type, price, value }) => ({
  type: type === 'weapon' && value ? `Урон: ${value}` : value && `Броня: ${value}`,
  price: price ? `Цена: ${price}` : '',
});
