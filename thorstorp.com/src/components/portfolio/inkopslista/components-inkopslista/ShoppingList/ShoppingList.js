import React from 'react'
import ShoppingItem from './ShoppingItem'


const ShoppingList = ({ items, deleteItemCallback, checkItemCallback, changeItemCallback }) => {


   


    return (
        <div>
            {
                items.map(item => (
                    <ShoppingItem item={item} changeItemCallback={changeItemCallback} deleteItemCallback={deleteItemCallback} checkItemCallback={checkItemCallback} key={item.id} />
                ))
            }
        </div>
    )
}

export default ShoppingList
