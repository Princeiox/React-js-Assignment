// src/components/SearchFilter.js
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const employees = useSelector((state) => state.employees);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or department"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.fullName} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
