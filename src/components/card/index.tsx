import React, { useState, useEffect, useRef } from "react";
import ReactFlow, { Background, Handle, Position } from "react-flow-renderer";
import styles from "./index.module.css";
import Dotted from "../../assets/dotted";
import InputBox from "../input";
import ConnectionPoint from "../connection-point";
import { validateEquation } from "../../constants";
import { DataType, FunctionChainItem } from "../../types";

const FunctionCardNode = ({ data }:{ data: DataType}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEquation = event.target.value;
    if (validateEquation(newEquation)) {
      if (data.onEquationChange) {
        data.onEquationChange(data.id, newEquation);
      }
    } else {
      alert(
        "Invalid equation! Please use only numbers, x, +, -, *, /, ^, and parentheses."
      );
    }
  };
  return (
    <div className={styles["card-container"]}>
      <div className={styles["header"]}>
        <Dotted /> Function: {data.id}
      </div>
      <div className={styles["card-content"]}>
        <div>
          <label className={styles["label"]}>Equation</label>
          <input
            key={data.id}
            className={styles["input-style"]}
            type="text"
            value={data.equation || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles["label"]}>Next Function</label>
          <select
            className={styles["select-style"]}
            disabled
            value={data.next || ""}
          >
            {data.next ? <option>Function {data.next}</option> : null}
          </select>
        </div>
        <div className={styles["footer"]}>
          <div className={styles["connection-div"]}>
            <ConnectionPoint />
            <div>input</div>
            <Handle
              type="target"
              style={{ marginLeft: "-30px" }}
              isConnectable={false}
              position={Position.Left}
              id="input"
            />
          </div>
          <div className={styles["connection-div"]}>
            <div>output</div>
            <Handle
              type="source"
              isConnectable={false}
              position={Position.Right}
              id="output"
            />
            <ConnectionPoint />
          </div>
        </div>
      </div>
    </div>
  );
};

const FunctionCardFlow = ({
  functions,
}: {
  functions: FunctionChainItem[];
}) => {
  const [inputValue, setInputValue] = useState(null);
  const [outputValue, setOutputValue] = useState(null);
  const [functionData, setFunctionData] = useState(functions);
  console.log(inputValue, "wdnnn");
  console.log(functionData, "checkDatam");

  const handleInputChange = (value: number) => {
    setInputValue(value);
  };
  const handleEquationChange = (id: number, equation: string) => {
    setFunctionData((prev) =>
      prev.map((func) => (func.id === id ? { ...func, equation } : func))
    );
  };

  const calculateOutput = (input: string) => {
    const parsedInput = parseFloat(input);
    if (isNaN(parsedInput)) {
      console.error("Invalid input. Please provide a valid number.");
      return;
    }

    let result = parsedInput;

    for (const func of functionData) {
      try {
        const equation = func.equation.replace("x", result.toString());
        result = eval(equation);
      } catch (error) {
        console.error("Error in equation evaluation:", error);
      }
    }
    setOutputValue(result);
  };

  useEffect(() => {
    if (inputValue !== "") {
      calculateOutput(inputValue);
    }
  }, [inputValue, functionData]);

  useEffect(() => {
    if (inputValue !== "") {
      calculateOutput(inputValue);
    }
  }, [functionData]);

  const firstNode = functions.find(
    (func) => !functions.some((f) => f.next === func.id)
  );
  const lastNode = functions.find((func) => func.next === null);

  const nodes = [
    {
      id: "input-node",
      type: "inputNode",
      position: { x: -145, y: 375 },
      data: { inputValue, type: "input", onInputChange: handleInputChange },
    },
    ...functionData.map((funcInfo, index) => ({
      id: funcInfo.id.toString(),
      key: funcInfo.id,
      type: "special",
      position: {
        x: index > 2 ? 335 * index - 820 : 350 * index,
        y: index > 2 ? 530 : 200,
      },
      data: {
        id: funcInfo.id,
        equation: funcInfo.equation,
        next: funcInfo.next,
        onEquationChange: handleEquationChange,
      },
    })),
    {
      id: "output-node",
      type: "outputNode",
      position: { x: 190 * functions.length, y: 375 },
      data: { outputValue, type: "output" },
    },
  ];

  const edges = [
    {
      id: `input-to-${firstNode?.id}`,
      source: "input-node",
      target: firstNode?.id.toString(),
      type: "bezier",
      style: { strokeWidth: 6, stroke: "rgba(0, 102, 255, 0.3)" },
    },
    ...functions
      .filter((funcInfo) => funcInfo.next)
      .map((funcInfo) => ({
        id: `e${funcInfo.id}-${funcInfo.next}`,
        source: funcInfo.id.toString(),
        target: funcInfo.next.toString(),
        type: "bezier",
        style: { strokeWidth: 6, stroke: "rgba(0, 102, 255, 0.3)" },
      })),
    {
      id: `last-to-output`,
      source: lastNode?.id.toString(),
      target: "output-node",
      type: "bezier",
      style: { strokeWidth: 6, stroke: "rgba(0, 102, 255, 0.3)" },
    },
  ];

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        defaultPosition={[350, -10]}
        nodes={nodes}
        defaultEdges={edges}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        defaultZoom={0.7}
        nodeTypes={{
          special: FunctionCardNode,
          inputNode: InputBox,
          outputNode: InputBox,
        }}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FunctionCardFlow;
