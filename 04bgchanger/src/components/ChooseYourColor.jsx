import React, { useState } from "react";

const ChooseYourColor = ({ color }) => {
  const [newColor, setNewColor] = useState("");
  const getColorHandler = (e) => {
    const newColor = e.target.value;
    setNewColor(newColor);
  };

  const onColorChange = () => {
    setcolor(newColor);
  };
  return (
    <div className="fixed flex flex-wrap justify-center bottom-50 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <input placeholder="enter your color" onChange={getColorHandler} />
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "cyan" }}
          onClick={onColorChange}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default ChooseYourColor;
