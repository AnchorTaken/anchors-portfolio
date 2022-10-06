import axios from "axios";
import { useState, useEffect } from "react";

export default function FetchData({ slug }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/${slug}?populate=*`
        );

        setData(res.data.data);
        setListlength(res.data.meta.pagination.total);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log("", data);
  return data;
}
