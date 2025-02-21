// Header

import Header from './components/Header'


// Main

import Main from './components/Main'


// Footer

import Footer from './components/Footer'


// Css

import './App.css'


function App() {

  const social = ['🐦', '▶️', '🐘', '📷', '📖']

  return (

    <>

      <Header />

      <Main />

      <Footer social={social} />

    </>

  )

}

export default App