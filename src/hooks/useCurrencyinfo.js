
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
function getCurrentMonthYear() {
    //  
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    if(month < 10) {
        return `${year}-0${month}-${currentDate.getDate()}`;
    }   
    else{
    return `${year}-${month}-${currentDate.getDate()}`;
    }
}
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${getCurrentMonthYear()}/v1/currencies/${currency}.json`)
       
 

        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;