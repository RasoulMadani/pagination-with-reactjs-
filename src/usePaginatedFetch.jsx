import _ from "lodash";
import { useEffect } from "react";
import { useState } from "react";
const usePaginatedFetch = (url, pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const paginatedData = _.chunk(data, pageSize); // داده را می گیرد و به اندازه ورودی دوم قسمت قسمت می کند
    setData(paginatedData);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return [loading, data];
};
export default usePaginatedFetch;
