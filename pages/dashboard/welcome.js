import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../pagestyles/home.module.scss';
import DashboardNav from '../../components/DashboardNav/Index';
import StateProgress from '../../components/misc/StateProgress';

// steps
import FirstStep from '../../components/Welcome/Step1';
import SecondStep from '../../components/Welcome/Step2';
import ThirdStep from '../../components/Welcome/Step3';
import FourthStep from '../../components/Welcome/Step4';
import FifthStep from '../../components/Welcome/Step5';
import StepButton from '../../components/misc/StepButton';

import Head from 'next/head';
import useAuthStore from '../../store/authStore';
import axios from 'axios';
import ProtectedHOC from './../../components/misc/ProtectedHOC';

const welcome = () => {
  const router = useRouter();
  const { accessToken, userProfile } = useAuthStore();
  let token = accessToken;
  const user_id = userProfile?.user?.id;
  const is_new_user = userProfile?.is_new_user;

  /*useEffect(() => {
    return () => {
      if (!userProfile) {
        router.push('/');
      }
      if (is_new_user === false) {
        router.push('/dashboard');
      }
    };
  }, [router, is_new_user]);*/

  //console.log(userProfile)
  //console.log(is_new_user)
  //console.log(token);
  //console.log(user_id);

  const [steps, setSteps] = useState(1);
  const [progress, setProgress] = useState(20);
  const [formData, setFormData] = useState({
    pvc: '',
    vote: '',
    available: '',
    state: '',
    lga: '',
    village: '',
    full_name: '',
    phone: '',
    selectedVillage: '',
  });

  const conditionalComponent = () => {
    switch (steps) {
      case 1:
        return <FirstStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <SecondStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <ThirdStep formData={formData} setFormData={setFormData} />;
      case 4:
        return <FourthStep formData={formData} setFormData={setFormData} />;
      case 5:
        return <FifthStep formData={formData} setFormData={setFormData} />;

      default:
        return <FifthStep formData={formData} setFormData={setFormData} />;
    }
  };

  // handle steps
  const handleSubmit = () => {
    setSteps(steps + 1);
    setProgress(progress + 20);
  };

  // submit forms
  const submitForm = async () => {
    // console.log(formData);
    const baseUrl = 'https://api.23forobi.com/';
    const headers = {
      //'Content-Type': 'application/json',
      //Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    // console.log(formData);
    const data = {
      data: formData,
      id: user_id,
    };
    const villageData = {
      village_id: formData?.village,
    };
    try {
      await axios
        .post(`${baseUrl}user-data`, data, { headers: headers })
        .then((res) => {
          //console.log(res);

          if (res.data && res.status === 200) {
            //setNewUser(user)
            //console.log(newUser)
            // registerUser(res.data.user_data);

            router.push('/dashboard/summary');
          }
        });
    } catch (error) {
      // console.log(error);
    }

    try {
      axios
        .post(`${baseUrl}user-villages`, villageData, { headers: headers })
        .then((res) => {
          // console.log(res)
        });
    } catch (error) {}
  };

  const handleSkip = () => {
    // console.log('Skipped');
    submitForm();
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className={`container overflow-auto h-auto`}>
        <DashboardNav />
        <div className="flex flex-col justify-center py-11">
          <h2 className="text-4xl font-light mt-10">
            We are so glad to <br />
            <span className="font-bold">Have you here</span>
          </h2>
          <hr className="mb-5 mt-2" />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  my-2">
            <div className="lg:w-3/4 w-full">
              <h2 className="text-[#018226] font-bold text-3xl">
                HERE ARE A FEW QUESTIONS TO GET YOU STARTED.
              </h2>
            </div>
            <div className="lg:w-1/4 w-1/2 py-5 lg:py-0">
              <StateProgress progress={progress} />
              <p className="my-1">Progress : {steps}</p>
            </div>
          </div>
        </div>
        <div className="overflow-auto">
          {conditionalComponent()}

          <StepButton
            steps={steps}
            handleSubmit={handleSubmit}
            submitForm={submitForm}
            handleSkip={handleSkip}
            type="submit"
            disabled1={!formData.pvc}
            disabled2={!formData.vote}
            disabled3={!formData.available}
            disabled4={!formData.state || !formData.lga || !formData.village}
            disabled5={
              !formData.full_name ||
              !formData.phone ||
              formData.phone.length < 11
            }
          />
        </div>
      </div>
    </>
  );
};

export default ProtectedHOC(welcome);
