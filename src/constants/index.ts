export const FUNCTIONS_CHAIN = [
  {
    id: 1,
    equation: "x+1",
    next: 2,
  },
  {
    id: 2,
    equation: "x*2",
    next: 4,
  },
  {
    id: 3,
    equation: "x-3",
    next: null,
  },
  {
    id: 4,
    equation: "x/2",
    next: 5,
  },
  {
    id: 5,
    equation: "x**2",
    next: 3,
  },
];

const VALID_EQUATION_REGEX = /^[0-9x\+\-\*\/\^]+$/;

export const validateEquation = (equation: string) => {
  return VALID_EQUATION_REGEX.test(equation);
};
