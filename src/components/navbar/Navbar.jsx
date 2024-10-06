import './navbar.css'
import { RiCloseLine , RiMenu3Line } from "react-icons/ri";
import logo from '../../assets/logo.svg'
import { useState } from 'react';

const Menu=()=>{
    return(
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibilites">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
}

const Navbar = () =>{
    const [Toggle,setToggle] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>


            <div className="gpt3__navbar-menu">
                {
                    Toggle ? <RiCloseLine onClick={()=>setToggle(false)} color='#fff' size={27}/> : <RiMenu3Line onClick={()=>setToggle(true)} color='#fff' size={27}/>
                }
            </div>


            {Toggle && (
            <div className="gpt3__navbar-menu_container scaple-up-center">
                <div className="gpt3__navbar-menu_container-links">
                    <Menu />
                    <div className="gpt3__navbar-menu_container-links-sign">
                        <p>Sign in</p>
                        <button type='button'>Sign up</button>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default Navbar;