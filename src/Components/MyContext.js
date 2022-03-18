import React, { useState, useEffect } from 'react'

export const MyContext = React.createContext()

const MyProvider = (props) => {

    return (
        <MyContext.Provider value={{

        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer }