import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard, ActivitiesList, Activity, Generator } from './pages/index';
import SidebarProvider from './context/SidebarProvider';

function App() {
  return (
    <SidebarProvider>
      <Routes>
        <Route path='/' element={<Dashboard />} />;
        <Route path={'dashboard'} element={<Dashboard />} />;
        <Route path={'activities/:type'} element={<ActivitiesList />} />
        <Route path={'activities/:type/:id'} element={<Activity />} />
        <Route path='daily-summary' element={<ActivitiesList />} />
        {/* <Route path='goals' element={<Generator />} />; */}
        <Route path='goals' element={<Dashboard />} />;
      </Routes>
    </SidebarProvider>
  );
}

export default App;
