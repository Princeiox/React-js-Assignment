import { Link } from "react-router-dom";

export default ({ children, className, ...rest }) => {
  return (
    <div className={`flex flex-col min-h-screen bg-[#f3f4f6] ${className}`} {...rest}>
      <header className="sticky top-0 z-10 flex flex-row justify-between bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-md">
        <h1 className="text-lg font-bold">Employee Management</h1>
        <div className="flex items-center gap-4">
          <Link
            to="/add"
            className="px-4 py-2 bg-white text-white rounded-lg hover:white transition"
          >
            Add Employee
          </Link>
          <Link
            to="/list"
            className="px-4 py-2 bg-white text-white rounded-lg hover:white transition"
          >
            See All Employees
          </Link>
        </div>
      </header>
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};