import React from 'react'
import Input from './components-inkopslista/Input/Input';
import ShoppingList from './components-inkopslista/ShoppingList/ShoppingList';
import TopNav from './components-inkopslista/TopNav/TopNav';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Inkopslista = ({setIsViewing}) => {


    const [items, setItems] = useState([
        {body: 'Kaffefilter',
         completed: false,
         id: uuidv4(),
        },
        {body: 'Mjölk',
        completed: false,
         id: uuidv4(),
        },
        {body: 'Varmkorv',
        completed: true,
         id: uuidv4(),
        },
        {body: 'Väggfäste',
        completed: true,
         id: uuidv4(),
        }
      ])
      
      const addItem = (newItem)=> {
        setItems((prevItems)=> {
          return [{
            body: newItem,
            completed: false,
            id: uuidv4()
          },
          ...prevItems
        ]
        })
      }
      
      const changeItemCallback = (id, newBody)=> {
        setItems((prevItems)=>{
           return prevItems.map(item => {
            if (item.id === id) {
              item.body = newBody;
            }
            return item;
          })
          })
      }
      
      const deleteItemCallback = (id) => {
        setItems((prevItems)=> { return prevItems.filter(item => item.id !== id)});
      }
      
      const checkItemCallback = (id) => {
        setItems((prevItems) => {
          return [
            ...prevItems.filter(item => item.id !== id),
            ...prevItems.filter(item => item.id === id)
          ]
        })
      }
      
      const deleteAllItems = ()=> {
        
        setItems (()=> {
            return []
          }) 
      }

      useEffect(()=>{
        return ()=>setIsViewing(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div>
            <TopNav/>
     <Input addItem={addItem} deleteAllItems={deleteAllItems}/>
     <ShoppingList items={items} changeItemCallback={changeItemCallback} deleteItemCallback={deleteItemCallback} checkItemCallback={checkItemCallback}/>
        </div>
    )
}

export default Inkopslista
