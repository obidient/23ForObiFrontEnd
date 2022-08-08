import Head from 'next/head';
import React from 'react';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import DashboardNav from '../../components/DashboardNav/Index';
import useAuthStore from '../../store/authStore';
// import styles from './pagestyles/home.module.scss';
import styles from '../pagestyles/home.module.scss';
import ProfileDisplay from './../../components/Dashboard/ProfileDisplay';
import ProtectedHOC from './../../components/misc/ProtectedHOC';

const dashboard = () => {
  return (
    <>
    <Head>
      <title>Profile</title>
    </Head>
      <div className={`${styles.profile} container`}>
        <DashboardNav />
        <div className={styles.profile__box}>
          <div className={styles.head}>
            <h2>Profile</h2>
            <hr />
          </div>
          <ProfileDisplay />
        </div>
      </div>
    </>
  );
};

export default ProtectedHOC(dashboard);
