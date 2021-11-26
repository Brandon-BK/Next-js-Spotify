import React from 'react'
import Nav from '../components/nav'
import Footer from './footer'



const Layout = ({children}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            
            <div style={{
                display: 'flex',

                }}>
            <Nav />
            <main style={{
                background: 'green',
                width: '100%',
                overFlowY: 'auto'
                }}>{children}</main>
            </div>

            <Footer />
        </div>
    )
}

export default Layout
