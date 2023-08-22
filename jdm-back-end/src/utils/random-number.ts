export function getRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomInteger = (a = 0, b = 1) => {
	const lower = Math.ceil(Math.min(a, b));
	const upper = Math.floor(Math.max(a, b));

	return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const generateDiscount = () => {
  const discounts = [
    0.3,
    0.2,
    0.1,
		0
  ];

  const randomIndex = getRandomInteger(0, discounts.length - 1);

  return discounts[randomIndex];
}