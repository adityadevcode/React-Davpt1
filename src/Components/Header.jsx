// creating header component
import React from 'react'

// first approach
// const Header = () => {
//   return (
//     <header style ={{
//         backgroundColor:'Blue',
//         color:'#fff'
//     }}>
//         <h3>Groceries List</h3>
//     </header>
//   )
// }
// second approach declaring in variable
// const Header = () => {
//     const headerStyle = {
//         backgroundColor:'Blue',
//         color:'#fff'
//     };

//     return (
//         <header style={headerStyle}>
//             <h1>Groceries List</h1>
//         </header>
//     )
// }

const Header =() => {
    return(
        <header>
            <h3> Groceries List</h3>
        </header>
    )
}

export default Header;