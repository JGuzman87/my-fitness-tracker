"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const StatForm = () => {

  const router = useRouter();

  const [stats, setStats] = useState({ date: "", weight: "", waist: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStats((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    console.log(stats);
    const storedStats = JSON.parse(localStorage.getItem('stats')) || [];
    const updatedStats = [...storedStats, stats];

      localStorage.setItem('stats', JSON.stringify(updatedStats))
    ;

    
    
    router.push("/stats");
    setStats({ date: "", weight: "", waist: "" });
  };

  return (
    <form
      className="bg-blue-400 flex flex-col gap-2 p-6 max-w-1/2 col-span-2 "
      onSubmit={handleClick}
    >
      <h1 className="text-2xl">Body Stats</h1>
      <label htmlFor="date">Date:</label>
      <input
        className="bg-white max-w-full p-1"
        type="date"
        name="date"
        value={stats.date}
        onChange={handleChange}
        required
      />
      <label htmlFor="weight">Weight:</label>
      <input
        className="bg-white max-w-full p-1"
        type="text"
        name="weight"
        value={stats.weight}
        onChange={handleChange}
        required
      />
      <label htmlFor="waist">Waist:</label>
      <input
        className="bg-white max-w-full p-1"
        type="text"
        name="waist"
        value={stats.waist}
        onChange={handleChange}
        required
      />
      <button className="btn btn-primary" type="submit">
        {" "}
        Enter{" "}
      </button>
    </form>
  );
};

export default StatForm;
