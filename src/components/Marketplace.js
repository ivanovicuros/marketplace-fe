import React, { useState, useEffect } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";

const Marketplace = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/items')
        .then(resp => {
            console.log(resp)
            setItems([
                ...items,
                resp.data
            ])
        })
        .catch(err => {
            console.log({err})
        })
    }, [])

    console.log(items)

    return(
        <>

        </>
    )
}

export default Marketplace;