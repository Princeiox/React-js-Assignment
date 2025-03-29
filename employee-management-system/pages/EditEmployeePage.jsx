import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editEmployee } from "../redux/employeesSlice";
import Layout from "../components/Layout";
import EmployeeForm from "../components/EmployeeForm";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ensure the `id` type matches the one in the Redux store
    const employee = useSelector((state) =>
      state.employees.find((emp) => emp.id === id) // Keep id as a string
    );


  const [formData, setFormData] = useState({
    fullName: "",
    birthdate: "",
    department: "",
    experience: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    birthdate: "",
    department: "",
    experience: "",
  });

  // Populate formData when employee is loaded
  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateEmployeeForm(formData);
    setErrors(validationErrors);

    // If there are errors, prevent submission
    const hasErrors = Object.values(validationErrors).some((error) => error);
    if (hasErrors) {
      return;
    }

    // Dispatch the action to edit the employee
    dispatch(editEmployee({ ...formData, id: parseInt(id) }));

    // Redirect to the list page
    navigate("/list");
  };

  return (
    <Layout>
      <EmployeeForm
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        buttonName="Edit Employee"
        errors={errors}
      />
    </Layout>
  );
};
