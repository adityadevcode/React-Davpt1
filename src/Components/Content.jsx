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
import React from 'react';
import {useState} from 'react';

const Content = () => {
    const [name, setName] = useState('Krishna');


    const handleNameChange = () => {
        const names = ['sam','krish','tony'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    // const handleClick = () => {
    //     console.log('you clicked it')
    // }

return (
    <main>
        {/* <p onDoubleClick={handleClick}>Hello{name}!</p> */}
<p>Hello {name}</p>
        <button onClick={handleNameChange}>Change Name</button>
    </main>
)
}


 export default Content;