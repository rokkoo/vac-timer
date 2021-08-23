import Head from 'next/head';
import Image from 'next/image';
import Countdown from 'react-countdown';
import CountDownComp from '../src/components/Countdown';
import Photos from '../src/components/Photos';

import styles from '../styles/Home.module.css';

const endTime = new Date();
endTime.setMonth(8);
endTime.setDate(11);
endTime.setHours(6);
endTime.setMinutes(45);
endTime.setSeconds(0);

function App() {
  return (
    <html>
      <Head>
        <title>Cuánto tiempo queda?</title>
        <meta
          name="description"
          content="Cuándo tiempo queda para las vacas?"
        />
      </Head>
      <div
        className={styles.container}
        style={{ backgroundColor: '#2d2d2e', minHeight: '100vh' }}
      >
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
        </div>
      </div>
    </html>
  );
}

export default App;
