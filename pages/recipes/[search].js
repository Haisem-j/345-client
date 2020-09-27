import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
export default function Search(){
    const router = useRouter();
    const[queries, setQueries] = useState({
       calories: router.query.calories,
       meal: router.query.meal,
       search:  router.query.search
    })
    console.log(router.query);
    return(
        <div>
            You searched for {queries.calories}
        </div>
    )
}