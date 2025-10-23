import MealsForm from '@/components/MealsForm';
import StatForm from '@/components/StatForm';
import Modal from '@/components/Modal';

const Dashboard = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 p-2 min-h-full">
        <div className="flex flex-col gap-4 p-2">
          <Modal btnName={"add stats"} modalId={"stats"}>
            <StatForm />
          </Modal>
          <Modal btnName={"add meal"} modalId={"meal"}>
            <MealsForm />
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Dashboard;