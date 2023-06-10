import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    //? define
    async function fetchData() {
      // const host = "https://jsonplaceholder.typicode.com";
      // const api = "/users";
      // const url = host + api;
      console.info(url);

      const result = await fetch(url);
      console.log(result);

      //? waiting response
      setIsloading(true);

      const response = await result.json();
      console.log(response);
      setTimeout(() => {
        setIsloading(false);
        setData((previous) => [...previous, ...response]);
      }, 2000);
    }
    //? execute
    fetchData();
  }, []);

  return {
    data,
    setData,
    isLoading,
    setIsloading,
  };
}
