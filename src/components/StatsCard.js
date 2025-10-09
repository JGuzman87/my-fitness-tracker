"use client";

import { useState, useEffect } from "react";

const StatsCard = () => {

    const [storedStats, setStoredStats] = useState([]);

    useEffect(() => {
      const savedStats = localStorage.getItem("stats");
      if (savedStats) {
        try {
          const parsed = JSON.parse(savedStats);
          if (Array.isArray(parsed)) {
            setStoredStats(parsed);
          } else {
            setStoredStats([parsed]);
          }
        } catch {
          console.error("Error parsing stored stats");
        }
      }
    }, []);

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US");
    return (
      <>
        {storedStats &&
          storedStats.length > 0 &&
          storedStats.map((stats, i) => (
            <div
              key={i}
              className="card bg-primary text-primary-content"
            >
              <div className="card-body">
                <h2 className="card-title">{formattedDate}</h2>
                <ul>
                  <li>
                    <p>{stats.weight} LBS</p>
                  </li>
                  <li>
                    <p>{stats.waist} Inches</p>
                  </li>
                </ul>
                <div className="card-actions justify-end">
                  <button className="btn btn-error">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
      </>
    );
}

export default StatsCard;