// useNutri.js
import { useState, useEffect } from 'react';

function useNutri() {
  const [nutri, setNutri] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadApi() {
      setIsLoading(true);
      try {
        let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
        const response = await fetch(url);
        const json = await response.json();
        setNutri(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    loadApi();
  }, []);

  return { nutri, isLoading, error };
}

export default useNutri;
