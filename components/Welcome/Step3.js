import React from 'react';

const Step3 = ({ formData, setFormData }) => {

  return (
    <div className="my-5">
      <h2 className="text-[#2F3733] text-3xl my-10">
        Can you be our person on ground in your village to educate people?
      </h2>
      <form>
        <div className="my-5">
          <input
            type="radio"
            checked={formData.available === 'yes'}
            value="yes"
            onChange={(e) => setFormData({ ...formData, available: e.target.value })}
          />
          <label
            htmlFor="yes"
            className="px-3 lg:text-2xl text-4xl font-normal text-[#2F3733]"
          >
            Yes
          </label>
        </div>
        <div className="my-5">
          <input
            type="radio"
            checked={formData.available === 'no'}
            value="no"
            onChange={(e) => setFormData({ ...formData, available: e.target.value })}
          />
          <label
            htmlFor="no"
            className="px-3 lg:text-2xl text-4xl font-normal text-[#2F3733]"
          >
            No
          </label>
        </div>
      </form>
    </div>
  );
};

export default Step3;
