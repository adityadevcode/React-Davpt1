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


// import {useState} from 'react';
// //Fontawesome TrashAlt Icon 
// import {FaTrashAlt} from 'react-icons/fa';

// const Content = () => {
//     // default state can be string, array
//     const [items, setItems] = useState([
//         // we have array contain3 objects, each obj has id,checked and item property
//     {
//         id:1, //string
//         checked:false, //boolean
//         // checked:true,
//         item:"one pound"
//     },
//     {
//         id:2,
//         checked:false,
//         // checked:true,
//         item:"one kilo" 
//     },
//     {
//         id:3,
//         checked:false,
//         // checked:true,
//         item:"one tonn" 
//     }
//     ]);

//     return(
//         <main>
// <ul>
//     {/* map is higher order fucntion */}
//     {/* each list in react need key */}
//     {/* by using id react know which items are added/deleted and updated */}
//     {items.map((item) => (
//         <li className="item" key={item.id}>
//              <input 
//              type="checkbox"
//              checked={item.checked}
//              />
//              <label>{item.item}</label>
//              {/* <button>Delete</button> */}
//              <FaTrashAlt 
//              role="button" 
//              tabIndex="0"
//              />
//         </li>
//     ))}
// </ul>
//         </main>
//     )
// }

// export default Content;

//why dont we see when checkmark when we click because
//boolean is set to false if it is true we can see. this will come from state
//  checked={item.checked}

//Adding onChange Listner , handleCheck function
//with check box we dont need onClick event we need onChange event, we need to pass anaony,ous func
//we dont want to change state directly we use map(hoc) 
//setItems to change the state
//it will not change default state of the app 
//view new component state in react dev tools
//when we reload the app it will come back as default state not the change we made for this purpose 
/*  we need to save the state and bring backs when app loads
we use local storage, we set an item and use json.stringfy it will save undershopping list in local storage   
-saving state lo local storage
-adding an ondoubleclick listner
-add conditional css styling
-adding on onClick listner
-handle delete function 
-adding empty list message
-when we will load state from local storage
*/

//final code
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    return (
        <main>
            {/* ternary operator incase if it is not display anything */}
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content
