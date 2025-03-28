import React from "react";

export default ({ handleSubmit, formData, handleChange, buttonName, errors }) => {
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{buttonName}</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
          required
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
      </div>

      {/* Birthdate */}
      <div className="mb-4">
        <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
          Birthdate
        </label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.birthdate && <p className="text-red-600 text-sm">{errors.birthdate}</p>}
      </div>

      {/* Department */}
      <div className="mb-4">
        <label htmlFor="department" className="block text-sm font-medium text-gray-700">
          Department
        </label>
        <select
          name="department"
          id="department"
          value={formData.department}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
          <option value="Sales">Sales</option>
        </select>
        {errors.department && <p className="text-red-600 text-sm">{errors.department}</p>}
      </div>

      {/* Experience */}
      <div className="mb-4">
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
          Experience (years)
        </label>
        <input
          type="number"
          name="experience"
          id="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Enter experience in years"
          required
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.experience && <p className="text-red-600 text-sm">{errors.experience}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        {buttonName}
      </button>
    </form>
  );
};
