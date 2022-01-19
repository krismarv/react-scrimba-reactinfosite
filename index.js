import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainContent from './MainContent'
import Footer from './Footer';


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