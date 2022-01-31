import React, { useState } from 'react';

const ItemForm = (props) => {
    const [item, setItem] = useState({
        name: '',
        price: 0,
        description: ''
    });

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={item.name} onChange={handleChange}/>
                </label>

                <label>Price:
                    <input type="number" name="price" value={item.price} onChange={handleChange}/>
                </label>

                <label>Description:
                    <input type="text" name="description" value={item.description} onChange={handleChange}/>
                </label>

                <button>ADD ITEM</button>
            </form>
        </>
    )
}

export default ItemForm;