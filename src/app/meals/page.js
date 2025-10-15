import MealCard from "@/components/MealCard";
import Dashboard from "@/components/MealImage";
const MealsPage = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 p-2">
      <MealCard />
      <Dashboard />
    </div>
  );
};

export default MealsPage;
