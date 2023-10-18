import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

export function CbSelect({ list, selected, setSelected }) {
  const [query, setQuery] = useState("");
  const filteredList =
    query === ""
      ? list
      : list.filter((list) =>
          list
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <Combobox
      value={selected}
      onChange={(event) => {
        setSelected(event);
      }}
    >
      <div className="relative w-full cursor-default overflow-hidden text-left">
        <Combobox.Input
          className="w-full border border-gray-400 rounded focus:outline-none focus:border-blue-500 py-2 pl-4 pr-10 leading-6"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          displayValue={(item) => item}
        />
        <Combobox.Options className="max-h-60 overflow-y-auto">
          {filteredList.map((item) => (
            <Combobox.Option
              className="py-1 hover:bg-gray-100"
              key={item}
              value={item}
            >
              {item}
            </Combobox.Option>
          ))}
        </Combobox.Options>
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <HiChevronDown />
        </Combobox.Button>
      </div>
    </Combobox>
  );
}
