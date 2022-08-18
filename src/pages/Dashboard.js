import React from 'react';
import { Info, Search, Navbar, User, Repo } from '../components';
const Dashboard = () => {
  return (
    <main>
      {/*<Navbar />*/}
      <Search /> 
     <Info /> 
      <User />
     {/*<Repo />*/}
    </main>
  );
};

export default Dashboard;
