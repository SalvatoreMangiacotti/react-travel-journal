// Header

import Header from './components/Header'


// Main

import Main from './components/Main'


// Footer

import Footer from './components/Footer'


// Data

import social from './data/social'


// Css

import './App.css'


function App() {

  return (

    <>

      <Header />

      <Main />

      <Footer social={social} />

    </>

  )

}

export default App