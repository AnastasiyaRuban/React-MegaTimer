import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export default function Timer({ participants }) {
  const startDate = new Date('November 9, 2020 07:00:00').getTime(); //Дата и время старта торгов, таймстап
  const [currentParticipant, setCurrentParticipant] = useState();
  const [[hour, minutes, seconds], setTime] = useState([1, 1, 1]);
  //Функция регулирующая течение таймера
  const tick = () => {
    setTime(() => {
      return [0, 1 - minutes, 60 - seconds];
    });
  };

  //Вычисление значений таймера и активного участника
  useEffect(() => {
    const currentDate = new Date().getTime(); //Текущее время, таймстап
    const timeRings = (currentDate - startDate) % (120000 * participants); // Длительность торгов на текущем круге, мс
    let currentParticipant = Math.ceil(timeRings / 120000); //Номер активного участника
    const currentTimeSec = Math.round((timeRings % 120000) / 1000); //Длительность торгов на текущем участнике, сек
    const currentMinutes = Math.floor(currentTimeSec / 60); //Текущая минута на участнике
    const currentSeconds = currentTimeSec % 60; //Текущая секунда на участнике

    let timerID = 0;

    setTime(() => {
      if (currentMinutes === 2 && currentSeconds === 0) {
        return [0, 0, 0];
      } else if (currentMinutes === 0 && currentSeconds === 0) {
        return [0, 2, 0];
      } else if (currentMinutes === 1 && currentSeconds === 0) {
        return [0, 1, 0];
      }
      return [0, 1 - currentMinutes, 60 - currentSeconds];
    });

    timerID = setInterval(tick, 1000);

    return () => {
      setCurrentParticipant(currentParticipant);
      clearInterval(timerID);
    };
  }, [minutes, seconds, currentParticipant]);

  return (
    <div
      className={styles.timer}
      style={{ gridTemplateColumns: `340px repeat(${participants}, 1fr)` }}
    >
      <p className={styles.timer__descr}>ХОД</p>
      <div
        className={styles.timer__time}
        style={{
          gridColumnStart: `${currentParticipant + 1}`,
        }}
      >
        <span className={styles.timer__value}>
          {`${hour.toString().padStart(2, '0')} :
      ${minutes.toString().padStart(2, '0')} :
      ${seconds.toString().padStart(2, '0')}`}
        </span>
        <HourglassBottomIcon className={styles.timer__icon} />
      </div>
    </div>
  );
}
