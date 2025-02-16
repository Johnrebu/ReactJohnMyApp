import React from 'react'
import "./Dummy.css"

const DummyRoute = () => {
  return (
    <>
    <header>
        <h1>GREEN TECH</h1>
        <nav>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#service">SERVICE</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
        <div>
            <button>GET STARTED</button>
        </div>
    </header>
    <section id='home'>
        <h1>HOME PAGE</h1>
    </section>
    <section id='about'>
        <h1>ABOUT PAGE</h1>
    </section>
    <section id='service'>
        <h1>SERVICE PAGE</h1>
    </section>
    <section id='contact'>
        <h1>CONTACT PAGE</h1>
    </section>
    </>
  )
}

export default DummyRoute