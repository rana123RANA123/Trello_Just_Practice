"use client";
import React, { useState } from "react";

type ContainerProps = {
  id: number;
  addInputField: (containerId: number) => void;
  removeContainer: (containerId: number) => void;
};

const Container: React.FC<ContainerProps> = ({
  id,
  addInputField,
  removeContainer,
}) => {
  const [inputFields, setInputFields] = useState<string[]>([]);

  const handleAddInputField = () => {
    setInputFields([...inputFields, ""]);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md mb-4 h-screen flex-shrink-0 w-80">
      <div className="flex justify-between mb-2">
        <button
          onClick={handleAddInputField}
          className="bg-blue-500 text-white px-2 py-1 rounded-md"
        >
          Add Input Field
        </button>
        <button
          onClick={() => removeContainer(id)}
          className="bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
      {inputFields.map((_, index) => (
        <input
          key={index}
          type="text"
          className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
        />
      ))}
    </div>
  );
};

export default Container;
