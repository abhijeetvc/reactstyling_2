import {useState} from 'react'
import './style.css'

function App() {
  const data=[
    {id:1,name:"Apple",isFavourite:true},
    {id:2,name:"Orange",isFavourite:true},
    {id:3,name:"Grapes",isFavourite:true}]

    const[fruits,setFruits]=useState(data)

    function handleClick(item){
        const newFruits=fruits.map((fruit)=>{
          if(fruit.id===item.id){
            return{
              id:fruit.id,
              name:fruit.name,
              isFavourite:!fruit.isFavourite
            }
          }else{
            return fruit
          }
        })

        setFruits(newFruits)
    }
  return (
      <div>
         <h2>Without styling</h2>
         <Cart items={fruits} onClick={handleClick}/>   
      </div>
  );
}

function Cart({items,onClick}){
   return(
     <ul className="unordered-list">
        {items.map((item)=>(
          <li key={item.id} className="list-item">
            {item.name}
            <button type="button"
                    className="button" onClick={()=>onClick(item)}>
              {item.isFavourite? 'Unlike':'Like'}
            </button>
          </li>
        ))}
     </ul>
   )
}
export default App;
