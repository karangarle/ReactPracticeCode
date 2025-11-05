import React from 'react'
import Header from './components/Layouts/Header'
import Center from './components/Layouts/Center'
import Footer from './components/Layouts/Footer'

function App() {
  const users = [
    {
      img : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      intro : "",
      tag : "Satisfied",
      color : "lightblue"
    },
    {
      img : "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      intro : "",
      tag : "Underbanked",
      color : "Purple"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1682432836046-baf51d79b416?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM2fHx3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      intro : "",
      tag : "Underground",
      color : "Teal"
    },
    {
      img : "https://images.unsplash.com/photo-1617899516937-54fb61f7d3d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA2fHx3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      intro : "",
      tag : "UnderStructured",
      color : "MediumBlue"
    }
  ]
  return (
    <div>
    {/* <Header /> */}
    <Center users={users} />
    {/* <Footer /> */}
    </div>
  )
}

export default App