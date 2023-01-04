import Key from "./Key";
import MathKey from "./MathKey";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  addMark,
  addValue1,
  addValue2,
  removeAllSyntax,
  removeMark,
  removeValue1,
  removeValue2,
  setResult,
} from "./calculatorSlice";
import { useState } from "react";

const numberKeyboard = [
  "ac",
  "RiDeleteBack2Fill",
  "%",
  7,
  8,
  9,
  4,
  5,
  6,
  1,
  2,
  3,
  0,
  ".",
];

const mathKeyboard = ["÷", "×", "-", "+", "="];

const Calculator = () => {
  const [syntax, setSyntax] = useState<string>("");
  const { value1, value2, mark } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const handleClickKeyBoard = (key: string | number) => {
    if (typeof key === "number") {
      if (mark === "") {
        const isPercent = value1.includes("%");
        if (isPercent) return;
        const newValue1 = value1.toString() + key.toString();
        dispatch(addValue1(newValue1));
      } else {
        const isPercent = value2.includes("%");
        if (isPercent) return;
        const newValue2 = value2.toString() + key.toString();
        dispatch(addValue2(newValue2));
      }
    } else {
      switch (key) {
        case "ac":
          if (value1 === "" && mark === "") return;
          dispatch(removeAllSyntax());
          break;

        case "RiDeleteBack2Fill":
          let newValue;
          if (mark === "") {
            if (value1 === "") return;
            newValue = value1.toString().slice(0, -1);
            dispatch(removeValue1(newValue));
          } else if (value2.toString().length === 0) {
            dispatch(removeMark());
          } else {
            newValue = value2.toString().slice(0, -1);
            dispatch(removeValue2(newValue));
          }
          break;

        case "+":
          if (!mark || value2 === "") {
            dispatch(addMark(key));
          } else {
            handleResult(value1, key, value2, false);
          }
          break;

        case "-":
          if (!mark || value2 === "") {
            dispatch(addMark(key));
          } else {
            handleResult(value1, key, value2, false);
          }
          break;

        case "×":
          if (!mark || value2 === "") {
            dispatch(addMark(key));
          } else {
            handleResult(value1, key, value2, false);
          }
          break;

        case "÷":
          if (!mark || value2 === "") {
            dispatch(addMark(key));
          } else {
            handleResult(value1, key, value2, false);
          }
          break;

        case "=":
          if (!mark || value2 === "") return;
          handleResult(value1, mark, value2, true);
          break;

        case ".":
          if (!mark) {
            const isDecimal = value1.includes(".");
            const isPercent = value1.includes("%");
            if (isDecimal || isPercent) return;
            const newValue1 = value1.toString() + key.toString();
            dispatch(addValue1(newValue1));
          } else {
            const isDecimal = value2.includes(".");
            const isPercent = value1.includes("%");
            if (isDecimal || isPercent) return;
            const newValue2 = value2.toString() + key.toString();
            dispatch(addValue2(newValue2));
          }
          break;

        case "%":
          if (!mark) {
            const isDecimal = value1.endsWith(".");
            const isPercent = value1.includes("%");
            const isStartWithPercent1 = !/^[^%]/.test(value1);
            if (isPercent || isDecimal || isStartWithPercent1) return;
            const newValue1 = value1.toString() + key.toString();
            dispatch(addValue1(newValue1));
          } else {
            const isPercent = value2.includes("%");
            const isDecimal = value1.endsWith(".");
            const isStartWithPercent2 = !/^[^%]/.test(value2);

            if (isPercent || isDecimal || isStartWithPercent2) return;
            const newValue2 = value2.toString() + key.toString();
            dispatch(addValue2(newValue2));
          }
          break;

        default:
          break;
      }
    }
  };

  const handleResult = (
    value1: string,
    mark: string,
    value2: string,
    equal: boolean
  ) => {
    let result: number;
    switch (mark) {
      case "+":
        let newValue1: string = value1;
    let newValue2: string = value2;
    const percentIndex1 = value1.indexOf("%");
    const percentIndex2 = value2.indexOf("%");
    if (percentIndex1 !== -1 && percentIndex2 === -1) {
      newValue1 = value1.replace("%", "");
      result = +newValue1 / 100 + +newValue2;
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else if (percentIndex1 === -1 && percentIndex2 !== -1) {
      newValue2 = value2.replace("%", "");
      result = +newValue2 / 100 + +newValue1;
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else if (percentIndex1 !== -1 && percentIndex2 !== -1) {
      newValue1 = value1.replace("%", "");
      newValue2 = value2.replace("%", "");
      result = +newValue1 / 100 + +newValue2 / 100;
      console.log(result)
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else {
      result = +newValue1 + +newValue2;
    dispatch(setResult(result));
    dispatch(addValue1(result.toString()));
    dispatch(addValue2(""));
    }
    
    if (!equal) {
      dispatch(addMark(mark));
    } else {
      dispatch(addMark(""));
    }
        break;

      case '-':
        let newValue11: string = value1;
        let newValue21: string = value2;
        const percentIndex11 = value1.indexOf("%");
        const percentIndex21 = value2.indexOf("%");
        if (percentIndex11 !== -1 && percentIndex21 === -1) {
          newValue11 = value1.replace("%", "");
          result = +newValue11 / 100 - +newValue21;
          dispatch(setResult(result));
          dispatch(addValue1(result.toString()));
          dispatch(addValue2(""));
        } else if (percentIndex11 === -1 && percentIndex21 !== -1) {
          newValue21 = value2.replace("%", "");
          result = +newValue21 / 100 - +newValue11;
          dispatch(setResult(result));
          dispatch(addValue1(result.toString()));
          dispatch(addValue2(""));
        } else if (percentIndex11 !== -1 && percentIndex21 !== -1) {
          newValue11 = value1.replace("%", "");
          newValue21 = value2.replace("%", "");
          result = +newValue11 / 100 - +newValue21 / 100;
          console.log(result)
          dispatch(setResult(result));
          dispatch(addValue1(result.toString()));
          dispatch(addValue2(""));
        } else {
          result = +newValue11 - +newValue21;
        dispatch(setResult(result));
        dispatch(addValue1(result.toString()));
        dispatch(addValue2(""));
        }
      if(!equal) {
        dispatch(addMark(mark))
      } else {
        dispatch(addMark(''))
      }
      break;

      case '×':
        let newValue12: string = value1;
    let newValue22: string = value2;
    const percentIndex12 = value1.indexOf("%");
    const percentIndex22 = value2.indexOf("%");
    if (percentIndex12 !== -1 && percentIndex22 === -1) {
      newValue12 = value1.replace("%", "");
      result = +newValue12 / 100 * +newValue22;
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else if (percentIndex12 === -1 && percentIndex22 !== -1) {
      newValue22 = value2.replace("%", "");
      result = +newValue22 / 100 * +newValue12;
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else if (percentIndex12 !== -1 && percentIndex22 !== -1) {
      newValue12 = value1.replace("%", "");
      newValue22 = value2.replace("%", "");
      result = +newValue12 / 100 * +newValue22 / 100;
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else {
      result = +newValue12 * +newValue22;
    dispatch(setResult(result));
    dispatch(addValue1(result.toString()));
    dispatch(addValue2(""));
    }

      if(!equal) {
        dispatch(addMark(mark))
      } else {
        dispatch(addMark(''))
      }
      break;
      
      case "÷":
        let newValue13: string = value1;
        let newValue23: string = value2;
        const percentIndex13 = value1.indexOf("%");
        const percentIndex23 = value2.indexOf("%");
        if (percentIndex13 !== -1 && percentIndex23 === -1) {
          newValue13 = value1.replace("%", "");
          result = +newValue13 / 100 / +newValue23;
          dispatch(setResult(result));
          dispatch(addValue1(result.toString()));
          dispatch(addValue2(""));
        } else if (percentIndex13 === -1 && percentIndex23 !== -1) {
          newValue23 = value2.replace("%", "");
          result = +newValue23 / 100 / +newValue13;
          dispatch(setResult(result));
          dispatch(addValue1(result.toString()));
          dispatch(addValue2(""));
        } else if (percentIndex13 !== -1 && percentIndex23 !== -1) {
          newValue13 = value1.replace("%", "");
          newValue23 = value2.replace("%", "");
          result = +newValue13 / 100 / +newValue23 / 100;
          console.log(result)
          dispatch(setResult(result));
          dispatch(addValue1(result.toString()));
          dispatch(addValue2(""));
        } else {
          result = +newValue13 / +newValue23;
        dispatch(setResult(result));
        dispatch(addValue1(result.toString()));
        dispatch(addValue2(""));
        }
      if(!equal) {
        dispatch(addMark(mark))
      } else {
        dispatch(addMark(''))
      }
      break;

      case "=": 
      console.log("=")
      let newValue14: string = value1;
    let newValue24: string = value2;
    const percentIndex14 = value1.indexOf("%");
    const percentIndex24 = value2.indexOf("%");
    if (percentIndex14 !== -1 && percentIndex24 === -1) {
      newValue14 = value1.replace("%", "");
      result = +(`${newValue14}/100${mark}${newValue24}`);
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else if (percentIndex14 === -1 && percentIndex24 !== -1) {
      newValue24 = value2.replace("%", "");
      result = +(`${newValue14}/100${mark}${newValue24}`);
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else if (percentIndex14 !== -1 && percentIndex24 !== -1) {
      newValue14 = value1.replace("%", "");
      newValue24 = value2.replace("%", "");
      result = +(`${newValue14}/100${mark}${newValue24}`);
      dispatch(setResult(result));
      dispatch(addValue1(result.toString()));
      dispatch(addValue2(""));
    } else {
      result = +(`${newValue14}/100${mark}${newValue24}`);
    dispatch(setResult(result));
    dispatch(addValue1(result.toString()));
    dispatch(addValue2(""));
    };
      break;

      default:
        break;
    }
  };
  
  const handleShowSyntax = () => {
    let result = "";
    if (value2 === "") {
      return (result = `${value1} ${mark}`);
    }
    result = `${value1} ${mark} ${value2}`;

    return result;
  };

  return (
    <div className="p-3">
      <h1 className="font-bold mb-5">Calculator</h1>
      <div className="w-[340px] m-auto">
        <div className="result font-medium text-white text-[32px] py-2 px-3 text-right bg-slate-500 h-[64px]">
          <div className="syntax">{syntax}</div>
          <div className="result">{handleShowSyntax()}</div>
        </div>
        <div className="flex items-center">
          <div className="w-3/4 flex flex-wrap">
            {numberKeyboard.map((key) => {
              return (
                <Key key={key} value={key} onClick={handleClickKeyBoard} />
              );
            })}
          </div>
          <div className="w-1/4">
            {mathKeyboard.map((key) => {
              return (
                <MathKey key={key} value={key} onClick={handleClickKeyBoard} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
