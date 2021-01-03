import React from 'react'
import ReactGA from 'react-ga'

const One = () => {

    const ClickHandler = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Click the button from first page'
        })
        alert('send the information to google analystic that I touched the click button')
    }
    return (

        <div>

            <button onClick={ClickHandler}>Click</button>
            first page
        </div>
    )
}

export default One