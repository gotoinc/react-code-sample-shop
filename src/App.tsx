import React, { FC } from 'react';
import { Header } from './components';
import './scss/index.scss';
import AppRouter from './components/AppRouter';

const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
       <AppRouter />
      </main>
    </div>
  );
};
export default App;
