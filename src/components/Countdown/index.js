import { useMemo } from 'react';

const CountDown = ({ className, formatted, daysClassName }) => {
  const { days, hours, minutes, seconds } = formatted;

  return (
    <>
      <p className={daysClassName}>{days} días</p>
      <p className={className}>
        {hours}:{minutes}:{seconds}
      </p>
    </>
  );
};

export default CountDown;
