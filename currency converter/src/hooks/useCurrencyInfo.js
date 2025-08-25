import { useEffect, useState } from "react";



function useCurrencyInfo(date,currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
   ` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json `   )
      .then((res) => res.json()) 
      .then((res) => setData(res[currency]));
      console.log(data)
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
