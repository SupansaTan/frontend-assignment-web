import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/layout/layout';
import routes from './routes';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          {
            routes.map((route, index) => {
              return (route.component) ? (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component/> }
                />
              ) : (null);
            })
          }
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
}

export default App;
