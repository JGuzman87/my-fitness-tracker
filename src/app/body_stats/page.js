"use client"

import { useState, useEffect } from 'react'

const BodyStats = () => {
  const [storedStats, setStoredStats ] = useState();
  useEffect(() => {
   const savedStats = localStorage.getItem("stats");
    if (savedStats) {
         try {
          setStoredStats(JSON.parse(savedStats))
         } catch {
          console.error("Error parsing stored stats");
         }
    }
 
  }, []);

  return (
    <>
      {storedStats && (
        <div className="card bg-primary text-primary-content w-96">
          <div className="card-body">
            <h2 className="card-title">{storedStats.date}</h2>
            <ul>
              <li>
                <p>{storedStats.weight} LBS</p>
              </li>
              <li>
                <p>{storedStats.waist} Inches</p>
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BodyStats;