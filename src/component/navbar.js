import React from "react";


const NavBar=()=>{
    return(
        <div>
        <nav className='ui raised padded segment'>
            <a className="ui teal inverted segment">image search engine</a>
            <div className="ui right floated header">
                <button className='ui button'><a href='/home'>home</a></button>
                <button className='ui button'><a href='/contact'>contact</a></button>
                <button className='ui button'><a href='/about'>about</a></button>
            </div>
        </nav>
        </div>
    )
}
export default NavBar;