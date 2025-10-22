import MealsForm from '@/components/MealsForm';
import StatForm from '@/components/StatForm';
import Modal from '@/components/Modal';

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-2 ">
      <StatForm  />
      
      <Modal />
    </div>
  );
}

export default Dashboard;