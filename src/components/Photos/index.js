import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../../../styles/photos.module.css';

const photosURLS = [
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50718385/original/20bb1431-c92e-4647-8bb1-ad050122026d.jpeg',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50718385/original/2ee25956-4cc0-4b32-a4c2-409dd6154032.jpeg',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50718385/original/db1d93d0-539d-4a5e-b8a3-c112054c76af.jpeg?im_w=1440',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50718385/original/8dd543b8-a0db-4efa-b969-748c28e4a4cf.jpeg?im_w=1440',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50718385/original/1fd6dac7-ad3c-4e00-8b7c-e398a4f3b697.jpeg?im_w=1440',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50718385/original/8f5c7708-89db-4265-ae59-ba75c1ecc6b4.jpeg?im_w=1440',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50718385/original/ce702bcd-3459-4ad4-a9c8-d5e7685cb617.jpeg?im_w=1440',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50718385/original/f78b809e-1ab4-4983-bdc9-84e88c3bb427.jpeg?im_w=1440',
];

const Photos = () => {
  const [photo, setPhoto] = useState(photosURLS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * photosURLS.length);
      setPhoto(photosURLS[randomIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.imageContainer}>
      <Image
        src={photo}
        alt="vacations logo"
        quality={100}
        width={800}
        height={800}
        objectFit="cover"
        className={styles.image}
      />
    </div>
  );
};

export default Photos;
