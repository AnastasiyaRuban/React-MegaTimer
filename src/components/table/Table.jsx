import React from 'react';
import styles from './Table.module.scss';

export default function Table({ participants }) {
  const getPrice = (price) => {
    return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} руб.`;
  };

  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          <th style={{ width: '340px' }} className={styles['table__head-cell']}>
            ПАРАМЕТРЫ И ТРЕБОВАНИЯ
          </th>

          {participants.map((item) => (
            <th
              style={{ width: `calc(100% - 340px) / ${participants.length}` }}
              key={item.id}
              className={styles['table__head-cell']}
            >
              УЧАСТНИК №{item.id}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className={styles.table__row}>
          <td className={styles['table__row-title']}>
            Наличие комплекса мер, повышающих стандарты качества изготовления
          </td>
          {participants.map((item) => (
            <td key={item.id} className={styles.row__cell}></td>
          ))}
        </tr>

        <tr className={styles.table__row}>
          <td className={styles['table__row-title']}>
            Срок изготовления лота, дней
          </td>
          {participants.map((item) => (
            <td key={item.id} className={styles.row__cell}>
              {item.productionTime}
            </td>
          ))}
        </tr>

        <tr className={styles.table__row}>
          <td className={styles['table__row-title']}>
            Гарантийные обязательства, мес
          </td>
          {participants.map((item) => (
            <td key={item.id} className={styles.row__cell}>
              {item.guarantee}
            </td>
          ))}
        </tr>

        <tr className={styles.table__row}>
          <td className={styles['table__row-title']}>Условия оплаты</td>
          {participants.map((item) => (
            <td key={item.id} className={styles.row__cell}>
              {item.payment}%
            </td>
          ))}
        </tr>

        <tr className={styles.table__row}>
          <td className={styles['table__row-title']}>
            Стоимость изготовления лота, руб (без НДС)
          </td>
          {participants.map((item) => (
            <td
              key={item.id}
              className={styles.row__cell}
              style={{ fontWeight: '600' }}
            >
              <span style={{ color: ' #0a87b4' }}>
                {getPrice(item.price.start)}
              </span>
              <br />
              <span style={{ color: ' #d64646' }}>
                {getPrice(item.price.discount)}
              </span>
              <br />
              <span style={{ color: ' green' }}>
                {getPrice(item.price.final)}
              </span>
            </td>
          ))}
        </tr>

        <tr className={styles.table__row}>
          <td className={styles['table__row-title']}>Действия</td>
        </tr>
      </tbody>
    </table>
  );
}
