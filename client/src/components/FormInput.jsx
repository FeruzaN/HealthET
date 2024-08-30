import React from 'react';

function FormInput({ label, register, name, type = "text", errors }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        {...register(name, { required: true })}
        type={type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors[name] && <p className="text-red-500 text-xs italic">This field is required</p>}
    </div>
  );
}

export default FormInput;
