import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/employeesSlice";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteEmployee(id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const lowercasedTerm = searchTerm.toLowerCase();
      const nameMatch = employee.fullName.toLowerCase().includes(lowercasedTerm);
      const departmentMatch = employee.department.toLowerCase().includes(lowercasedTerm);
      return searchBy === "name" ? nameMatch : departmentMatch;
    });
  }, [employees, searchTerm, searchBy]);

  const sortedEmployees = useMemo(() => {
    return filteredEmployees.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "name") {
        comparison = a.fullName.localeCompare(b.fullName);
      } else if (sortBy === "experience") {
        comparison = a.experience - b.experience;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [filteredEmployees, sortBy, sortOrder]);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Employee List</h2>

        {/* Search and Filter Section */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search by name or department"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-blue-500 focus:border-blue-500"
          />
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="name">Name</option>
            <option value="department">Department</option>
          </select>
        </div>

        {/* Employee List */}
        {sortedEmployees.length === 0 ? (
          <p className="text-center text-gray-600">No employees found</p>
        ) : (
          <ul className="space-y-4">
            {sortedEmployees.map((employee) => (
              <li
                key={employee.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-gray-800">{employee.fullName}</p>
                <p className="text-sm text-gray-600">{employee.department}</p>
                <div className="mt-2 flex gap-4">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};
