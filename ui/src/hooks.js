import { useState, useEffect } from "react";

export const useFetcher = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error("error: ", error);
        window.alert("error: ", error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [url]);

  return [data, isLoading, setData];
};
