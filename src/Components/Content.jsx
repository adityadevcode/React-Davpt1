// import React from 'react';

// const Content= () => {
// //we can declare variables and function here
// //const name = sample;
// //we can define function below, function always start with handle as convention
//  //we will use to handle click event or some time of events 
// const handleNameChange =() => {
// const names=['React','Javascript','node'];
//  const int = Math.floor(Math.random() * 3);
// return names[int];
//  } 

// //EVENT handler on button onclick
//  const handleClick = () => {
//     console.log('you clicked it')
//  }

//  //we can pass a parameter to a function
//  const handleClick2 = (name) => {
//     console.log(`${name} was clicked`)
//  }

//  //passing an event
//  const handleClick3 = (e) => {
//     // console.log(e.target) //button click it button
//     console.log(e.target.innerText)//click it
//  }

//   return (
//     <main>
// {/* we can call function here */}
// <p>hello{handleNameChange()}</p>
// <button onClick={handleClick}>Click IT</button>
// {/* anonymous function */}
// <button onClick={()=> handleClick2('krish')}>Click IT</button>
// <button onClick={(e)=> handleClick3(e)}>Click IT</button>

//     </main>
//   )
// }

// export default Content;
//////////////////////////////////////////////////

// second approach using useState
// import React from 'react';
// import {useState} from 'react';

// const Content = () => {
//     // default data we can keep in useState when computer loads
//     const [name, setName] = useState('Krishna');//default state is krishna
//     // setting other state
//     const [count, setCount]= useState(0);//default state is 0

//  const handleNameChange = () => {
//         const names = ['sam','krish','tony'];
//         const int = Math.floor(Math.random() * 3);
//     // instead of returing values we are using setState value
//         setName(names[int]);
//     }

//     const handleClick = () => {
//         // to change the state we need to use setstate
//         setCount(count+1)
//         console.log(count)
//         // 0,1,2,3----
//     }

// return (
//     <main>
//         {/* <p onDoubleClick={handleClick}>Hello{name}!</p> */}
// <p>Hello {name}</p>
// {/* when we click on Change Name state will change (name is state) */}
//     <button onClick={handleNameChange}>Change Name</button>
//     <button onClick={handleClick}>Click It</button>
//     </main>
// )
// }

//  export default Content;

//////React List and keys


import {useState} from 'react';
//Fontawesome TrashAlt Icon 
import {FaTrashAlt} from 'react-icons/fa';

const Content = () => {
    // default state can be string, array
    const [items, setItems] = useState([
        // we have array contain3 objects, each obj has id,checked and item property
    {
        id:1, //string
        checked:false, //boolean
        item:"one pound"
    },
    {
        id:2,
        checked:false,
        item:"one kilo" 
    },
    {
        id:3,
        checked:false,
        item:"one tonn" 
    }
    ]);

    return(
        <main>
<ul>
    {/* map is higher order fucntion */}
    {/* each list in react need key */}
    {/* by using id react know which items are added/deleted and updated */}
    {items.map((item) => (
        <li className="item" key={item.id}>
             <input 
             type="checkbox"
             checked={item.checked}
             />
             <label>{item.item}</label>
             {/* <button>Delete</button> */}
             <FaTrashAlt 
             role="button" 
             tabIndex="0"
             />
        </li>
    ))}
</ul>
        </main>
    )
}

export default Content;






