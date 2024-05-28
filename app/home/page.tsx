"use client";
import React, { useState } from "react";
import Container from "../components/dynamicContainers/DynamicContainers";

const DynamicContainers: React.FC = () => {
  const [containers, setContainers] = useState<number[]>([]);

  const handleAddContainer = () => {
    setContainers([...containers, containers.length]);
  };

  const handleRemoveContainer = (id: number) => {
    setContainers(containers.filter((containerId) => containerId !== id));
  };

  return (
    <div className="p-4">
      <button
        onClick={handleAddContainer}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Add Container
      </button>
      <div className="flex h-[100%] w-[100%] space-x-4 overflow-x-auto">
        {containers.map((id) => (
          <Container
            key={id}
            id={id}
            addInputField={() => {}}
            removeContainer={handleRemoveContainer}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContainers;
