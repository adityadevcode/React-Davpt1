import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


// function App() {
//   //we can write js code below
//   const name ="sample";
//   const name1 ="test";
//   return (
// <div>
// <h2>welcome</h2>
// <h3>React</h3>
// <p>{name}</p>
// <p>{name1}</p>
// <p>hi my name is {name1}</p>
// <p>{"Sample"}</p>
// <h2>{"welcome"}</h2>
// <p>{1+1}</p>
// <p>{[1,2,3,45]}</p>
// <p>[1,2,3]</p>
// {/* jsx {}, obj, boolean will not render*/}

// </div>
//   );
// }

 function App()  {
return (
<React.Fragment>
<Header />
<Content />
<Footer />
</React.Fragment>
);

}

export default App;


