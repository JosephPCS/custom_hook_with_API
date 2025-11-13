import { useState } from "react";
import { useEffect } from "react";

const UseFetch = (url) => {
    const [data,setData] = useState();

    useEffect(() => {
        fetch(url).then((res) => res.json()) // converts the rwespoonse promise into json format
        .then((data) => setData(data))  // updating the data state with the response promise. 
        //takes retrived data nad sets it to state variable data
        
    },[])
    return [data]
}

export default UseFetch
