import { useState } from 'react';
import styles from './Styles.module.scss';
import peterobi from '../../assets/peterobi.png';
import Image from 'next/image';

const ProgressBar = ({ done, bgColor, pgColor, type }) => {
  const [style, setStyle] = useState({});

  const progress = done < 11 ? 11 : done;
  
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress}%`,
      // width: '12%',
      backgroundColor: pgColor,
    };

    setStyle(newStyle);
  }, 200);

  const bgStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div className={styles.progress} style={bgStyle}>
      <div
        className={
          type === 'state'
            ? `${styles.progress_done} ${styles.progress_done_state}`
            : `${styles.progress_done}`
        }
        style={style}
      >
        <div className={styles.img}>
          {type === 'village' ? '' : <Image src={peterobi} width={95.92} height={99}  alt='peter obi' />}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
