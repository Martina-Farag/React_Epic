import { useState, useEffect } from "react";

//// Custom Hook
const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(true);
          setError(err.message);
        });
    }, 1000);
  }, [url]); //on send url dependency useEffect will render dom iitially

  return { data, isPending, error };
};

export default UseFetch;
