import React, { useEffect, useState } from 'react';
import useAuthStore from '../../store/authStore';
import { useRouter } from 'next/router';
import Loader from '../Loader';

const Step1 = ({ formData, setFormData }) => {
  const { userProfile } = useAuthStore();
  const router = useRouter();
  const is_new_user = userProfile?.is_new_user;

  const { pvc } = formData;

  useEffect(() => {
    return () => {
      if (is_new_user === false) {
        router.push('/dashboard');
      }
    };
  }, [router, is_new_user]);

  return (
    <>
      <div className="my-5">
        <h2 className="text-[#2F3733] lg:text-3xl my-10">
          Do you have your PVC (Permanent voters card)?
        </h2>
        <form>
          <div className="my-5">
            <input
              className="cursor-pointer"
              type="radio"
              checked={pvc === 'yes'}
              value="yes"
              onChange={(e) =>
                setFormData({ ...formData, pvc: e.target.value })
              }
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
              className="cursor-pointer"
              type="radio"
              checked={pvc === 'no'}
              value="no"
              onChange={(e) =>
                setFormData({ ...formData, pvc: e.target.value })
              }
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
    </>
  );
};

export default Step1;
