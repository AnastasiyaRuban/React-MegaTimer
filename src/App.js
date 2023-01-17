import './index.scss';
import React from 'react';
import Timer from './components/timer/Timer';

import { StyledEngineProvider } from '@mui/material/styles';
import Table from './components/table/Table';
import { participantsInfo } from './store/participantsInfo';

function App() {
  const participants = participantsInfo.length;

  return (
    <StyledEngineProvider injectFirst>
      <div className='container pt-5'>
        <div className='header'>
          <h2 className='header__title'>
            Ход торгов{' '}
            <b>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020) 07:00</b>
          </h2>
          <p className='header__descr'>
            Уважаемые участники, во время вашего хода вы можете изменить
            параметры торгов, указанных в таблице:
          </p>
        </div>
        <Timer participants={participants} />
        <Table participants={participantsInfo} />
      </div>
    </StyledEngineProvider>
  );
}
export default App;
