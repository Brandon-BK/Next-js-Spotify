import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <div style={{
            width: '250px',
            height: '85vh',
            background: '#222',
            color: 'white'

        }}>

            <div style={{
                width: '100%',
                height: 60,
                border: '1px solid black'
            }}>

            </div>

            <ul style={{
                listStyleType: 'none',
                height: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 30
            }}>
                <li>
                    <Link href='/'>Home</Link>
                </li>

                <li>
                    <Link href='/search'>Search</Link>
                </li>

                <li>
                    <Link href='/library'>Library</Link>
                </li>
                
               
            </ul>

            <ul style={{
                listStyleType: 'none',
                height: 45,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <li>
                    <Link href='/library'>Liked</Link>
                </li>

                <li>
                    <Link href='/library'>Create PlayList</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Nav
