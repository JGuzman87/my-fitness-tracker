import MealsForm from '@/components/MealsForm';
import StatForm from '@/components/StatForm';
import React from 'react'

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-2 ">
      <StatForm  />
      <MealsForm />
    </div>
  );
}

export default Dashboard;