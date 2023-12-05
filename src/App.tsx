import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import './static/css/global.css';

export const App: React.FC = () => <div className='app__container'>
  <Calendar />
</div>

export default App;
