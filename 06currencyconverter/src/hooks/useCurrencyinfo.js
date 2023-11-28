import { useEffect,useState } from "react";
// here we are creating custom hook , and also we can add already define hook inside custom hook
function useCurrencyinfo(currency) {
    const [data,setData] = useState({})
     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
     },[currency]) 
     //in above we are fetching value from api than it is in string format so convert into json and then based on value of currency we are fetching the data and also use effect will do depend on currency type also.
     console.log(data);
     return data;
}

export default useCurrencyinfo;

// here we are returning full custom hook