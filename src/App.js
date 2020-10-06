import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {

  const nayoks =['Razzak','jasim','Alomgir','salman']
  const products =[
    {name:'Photoshop',price:'$80.90'},
    {name:'Illustrator',price:'$1000.90'},
    {name:'PDF Reader',price:'$80.90'}
  
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>My paragraph</p>
          <Counter></Counter>
          <Users></Users>
         <ul>
           {
            nayoks.map(nayok => <li>{nayok}</li>)
           }
           {
            products.map(p=> <li>{p.name}</li>)
           }
         </ul>

         {
           products.map(pd=> <Product product={pd}></Product>)
         }

      </header>
    </div>
  );
}

function Users(){

  const[users, setUsers]= useState([]);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data))

  },[])

  return(
    <div>
  <h1>Dynamic Users:{users.length}</h1>
 <ul>
   {

   users.map(u=> <li>{u.name}</li>)
   }

 </ul>

    </div>

  )

}


function Counter(){

  const [count, setCount] =useState(10);
  //const handleIncrease = () => setCount(count+1);
  

  return(
    <div>

    <h1>Count:{count}</h1>
    <button onClick={() => setCount(count+1)}>Increase</button>
    <button onClick={() => setCount(count-1)}>decrease</button>

    </div>
  )

}



function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    hight:'200px',
    width:'200px',
    float:'left'
  }
  const  {name, price} = props.product;
  console.log(name,price);
 
  return(
     <div style={productStyle}>
       <h3>{name}</h3>
       <h3>{price}</h3>
       <button>Buy Now</button>
     </div>
  )

}

export default App;
