import React from 'react';
import Item from "./Item";

const ItemList = (props) => {
    const { items, marketplace, setItems } = props;

    return(
        <>
            {items.map((item, ind) => (
                <Item key={ind} item={item} marketplace={marketplace} setItems={setItems} />
            ))}
        </>
    )
    
}

export default ItemList;