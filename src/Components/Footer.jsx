import React from 'react'

const Footer = () => {
    // newDate obj
    const today = new Date();
  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
    {/* <h3>welcome</h3> */}
    </footer>
  )
}

export default Footer;