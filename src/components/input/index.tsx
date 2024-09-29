import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";
import { Handle, Position } from "react-flow-renderer";
import ConnectionPoint from "../connection-point";
import { DataType } from "../../types";

const InputBox = ({ data }: {data:DataType}) => {
  const isInput = data.type === "input";
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef?.current?.focus();
    }
  }, []);

  return (
    <div className={styles["label-container"]}>
      <div className={styles[`label-${data.type}`]}>
        {isInput ? "Input" : "Output"} value of x
      </div>
      <div>
        <input
          
          className={styles[`${data.type}-style`]}
          type="number"
          disabled={!isInput}
          value={!isInput ? data.outputValue : data.inputValue}
          onChange={(e) => {
            data.onInputChange(e.target.value);
          }}
        />
        <div className={styles[`border-style-${data.type}`]}>
          {" "}
          <ConnectionPoint />
        </div>
      </div>
      {isInput ? (
        <Handle
          type="source"
          isConnectable={false}
          style={{ marginLeft: "64px" }}
          position={Position.Right}
          id="input-output"
        />
      ) : (
        <Handle
          type="target"
          isConnectable={false}
          style={{ marginLeft: "-34px" }}
          position={Position.Right}
          id="input-output"
        />
      )}
    </div>
  );
};
export default InputBox;
