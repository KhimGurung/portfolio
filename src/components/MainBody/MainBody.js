import React from 'react'

function MainBody({ children }) {
    return (
        <main style={{ flex: 1 }}>
            { children }
        </main>
    )
}

export default MainBody
