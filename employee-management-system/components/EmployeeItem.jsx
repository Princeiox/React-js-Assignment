import React from "react";
import { Link } from "react-router-dom";

const LEVEL = `font-semibold text-gray-800 text-lg`
const VALUE = `text-gray-600 text-sm`

export default ({ employee, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-200">
      <div className="flex-1">
      <div>
  {Object.entries(employee).map(([key, value]) => (
    <div key={key}>
      <strong className={`${LEVEL}`}>{`${key.charAt(0).toUpperCase() + key.slice(1)}:`}</strong>
      <output className={`${VALUE}`}>{value} {key === 'experience' ? 'years' : ''}</output>
    </div>
  ))}
</div>
      </div>


      <div className="flex space-x-4">
        <Link
          to={`/edit/${employee.id}`}
          className="p-2 bg-amber-500 rounded-md font-semibold transition duration-200"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(employee.id)}
          className="text-red-600 hover:text-red-800 font-semibold transition duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
};