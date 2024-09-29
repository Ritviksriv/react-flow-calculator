# React Flow Function Chaining Project

This project is a dynamic function chaining tool built with React Flow, allowing users to create and manipulate a series of mathematical functions with a fixed execution order. The primary features include customizable function inputs, a visual representation of function connections, and a straightforward input/output system.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Functionality](#functionality)

## Features

- **Function Cards**: Implement exactly five functions, each with a customizable input field for mathematical equations.
- **Input Validation**: Each input only accepts basic arithmetic operations (addition, subtraction, multiplication, division) and exponents.
- **Fixed Execution Order**: Functions execute in a predetermined sequence (1 → 2 → 4 → 5 → 3).
- **Visual Representation**: The chaining of functions is represented with connected lines for better understanding.
- **Input/Output Handling**: Users can input an initial value, and the final output is displayed after applying all functions.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-flow-function-chaining.git
   ```
2. Navigate into the project directory:
   ```bash
   cd react-flow-function-chaining
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the development server:

```bash
  npm start
```

## Installation

1. Enter the initial value in the provided input field.
2. Modify the mathematical equations in each function's input field as needed.
3. The final output will be displayed after all functions are applied, adhering to the fixed execution order.

## Functionality

### Function Cards

Each function card includes:

- A text input field for entering the mathematical equation.
- Input validation to ensure only basic arithmetic operations and exponents are accepted.
- The structure is designed to easily accommodate additional functions in the future.

### Function Chaining

- A dropdown menu displays the next function in the chain for each function card, which is disabled to prevent user modifications.
- The chaining of functions is visually represented using connected lines, clearly illustrating the flow from the initial input to the final output.

### Input and Output

- Users can enter an initial value (x), which connects to function 1.
- The output (y) is displayed once all functions have been applied, showcasing the final result connected to function 3.

`
