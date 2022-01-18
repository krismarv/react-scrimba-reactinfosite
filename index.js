/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */
import React from 'react';
import ReactDOM from 'react-dom';

function Header () {
  return (
    <nav className='navbar'>
      <img className="logo-img" src="react-logo.png"></img>
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function Footer() {
  return (
    <footer>
        <small>© 2022 Marvalova development. All rights reserved.</small>
      </footer>
  )
}

function MainContent () {
  return (
    <div className='main-content'>
      <h1>This is why I want to learn React</h1>
      <ul>
        <li>I haven't learnt any frontend skills since Bootstrap</li>
        <li>It's in-demand</li>
        <li>It's pretty exciting to learn</li>
        <li>I'm focusing on JavaScript for both the front end and the back end</li>
      </ul>
    </div>
    
  )
}

function PageBody () {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


ReactDOM.render(
  <div>
    <PageBody />
  </div>
  , document.getElementById("root"))