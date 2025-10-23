"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const StatForm = () => {
  const router = useRouter();

  const [metric, setMetric] = useLocalStorage('stats', []);

  const [stats, setStats] = useState({ weight: "", waist: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStats((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    const nextStats = [...metric, stats ];
    setMetric(nextStats);
    try {
      localStorage.setItem('stats', JSON.stringify(nextStats));
    } catch (err) {
      console.error("Error writing stats to localStorage", err);
    }
  

    router.push("/stats");
    setStats({ weight: "", waist: "" });
  };

  return (
    <form
      className="bg-white flex flex-col gap-6 p-2 col-span-1"
      onSubmit={handleClick}
    >
      <h1 className="text-2xl">Stats</h1>
      <label htmlFor="weight">Weight:</label>
      <input
        className="bg-gray-300  max-w-full p-1"
        type="text"
        name="weight"
        value={stats.weight}
        onChange={handleChange}
        required
      />
      <label htmlFor="waist">Waist:</label>
      <input
        className="bg-gray-300  max-w-full p-1"
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
