import React from "react";

export function Feedback({ active, message }) {
  return (
    <div className={`${active} border border-red-500 rounded mb-8 px-6 py-4`}>
      <ul className="text-sm sm:text-base">
        {message.map((m) => (
          <li>- {m}</li>
        ))}
      </ul>
    </div>
  );
}
