export type FunctionChainItem = {
  id: number;
  equation: string;
  next: number | null;
};

export type DataType = {
  id: number;
  equation: string;
  next: number | null;
  onEquationChange?: (id: number, equation: string) => void;
  onInputChange?: (value: string) => void;
  outputValue?: number;
  type?: string;
  inputValue?: number;
};
