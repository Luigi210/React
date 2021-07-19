import { useState } from "react";
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

// import { useState } from "react";

// export const useInput = initialValue => {
//     const [value, setValue] = useState(initialValue);

//     return [
//         { value, onChange: e => setValue(e.targer.value) },
//         () => setValue(initialValue)
//     ];
// };