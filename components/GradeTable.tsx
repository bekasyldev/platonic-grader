"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";

const GradeTable = () => {
  const [grades, setGrades] = useState<string[][]>([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const [total, setTotal] = useState(0);

  const validateGrade = (value: string): boolean => {
    const parsedValue = parseFloat(value);

    if (
      value === "н" ||
      value === "нп" ||
      (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    rowIdx: number,
    colIdx: number
  ) => {
    const { value } = e.target;
    const newGrades = [...grades];
    if (validateGrade(value)) {
      newGrades[rowIdx][colIdx] = value;
      setGrades(newGrades);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = grades.length;
    const columnSums = calculateColumnSums();
    const newTotal =
      Math.floor(columnSums[0] / n) * 0.2 +
      Math.floor(columnSums[1] / n) * 0.5 +
      Math.floor(columnSums[2] / n) * 0.3;
    setTotal((prevTotal) => prevTotal + newTotal);
  };

  const calculateColumnSums = (): number[] => {
    const columnSums: number[] = new Array(grades[0].length).fill(0);

    for (let i = 0; i < grades.length; i++) {
      for (let j = 0; j < grades[i].length; j++) {
        if (grades[i][j] === "нп") {
          columnSums[j] += 100;
        } else if (grades[i][j] === "н") {
          columnSums[j] -= 7;
        } else {
          const parsedGrade = parseInt(grades[i][j]);
          if (!isNaN(parsedGrade)) {
            columnSums[j] += parsedGrade;
          }
        }
      }
    }

    return columnSums;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <table className="border-collapse border border-gray-400">
        <tbody>
          {grades.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((grade, colIdx) => (
                <td
                  className="border border-gray-400 p-2"
                  key={`${rowIdx}-${colIdx}`}
                >
                  <Input
                    className="w-20"
                    value={grade}
                    onChange={(e) => handleChange(e, rowIdx, colIdx)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 border border-gray-400 px-4 py-2">{total}</div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit Grades
      </button>
    </form>
  );
};

export default GradeTable;
