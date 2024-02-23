import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <div className='display-flex dir-col dir-md-col' style={{padding: '0px 16px'}}>
        <Header />
        
        {children}

        <Footer />
    </div>
  )
}

export default MainLayout