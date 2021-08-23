import Head from 'next/head';
import Image from 'next/image';
import Countdown from 'react-countdown';
import CountDownComp from '../src/components/Countdown';
import Photos from '../src/components/Photos';

import styles from '../styles/Home.module.css';

const endTime = new Date();
endTime.setMonth(8);
endTime.setHours(6);
endTime.setMinutes(45);
endTime.setSeconds(0);

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Photos />
        <div className={styles.timerContainer}>
          <Countdown
            date={endTime}
            renderer={(props) => (
              <CountDownComp
                {...props}
                className={styles.timer}
                daysClassName={styles.days}
              />
            )}
          />
        </div>
        <div className={styles.bg} />
      </div>
    </div>
  );
}

export default App;
