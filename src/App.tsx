import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
          <Route path="*" element={<Navigate to="/trip-finder" />} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
}

export default App;
