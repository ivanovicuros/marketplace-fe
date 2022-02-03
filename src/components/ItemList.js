import React from 'react';
import Item from "./Item";

const ItemList = (props) => {
    const { items, marketplace } = props;

    return(
        <>
            {items.map((item, ind) => (
                <Item key={ind} item={item} marketplace={marketplace}/>
            ))}
        </>
    )
    
}

export default ItemList;