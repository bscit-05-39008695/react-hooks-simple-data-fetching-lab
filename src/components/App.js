import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        dogImage && <img src={dogImage} alt="A Random Dog" className="max-w-full h-auto rounded-lg shadow-lg" />
      )}
    </div>
  );
};

export default App;