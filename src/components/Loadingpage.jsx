import React, { useState, useEffect } from 'react';
import '../styles/Loadingpage.css';
import assets from '@/assets/assets';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading_container">
          <img src={assets.loadingGif} alt="Loading" />
        </div>
      ) : (
         <></>
      )}
    </>
  );
}
