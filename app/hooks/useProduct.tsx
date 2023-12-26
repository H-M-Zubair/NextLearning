import Axios from "axios";
import { useState, useEffect } from "react";

function useProduct(url: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState<string>("");
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(url);
      setData(response.data.products);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message); 
      console.error("Error in Fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data, error };
}
export default useProduct;
