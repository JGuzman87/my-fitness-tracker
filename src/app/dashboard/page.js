import MealsForm from '@/components/MealsForm';
import StatForm from '@/components/StatForm';
import React from 'react'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 p-2 ">
      <StatForm  />
      <MealsForm />
    </div>
  );
}

export default Dashboard;