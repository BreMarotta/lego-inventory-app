import React, { useState, useEffect } from 'react'

export const MyContext = React.createContext()

const MyProvider = (props) => {
    const [legoSets, setLegoSets] = useState([])
    const [owners, setOwners] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/lego_sets')
        .then(res => res.json())
        .then(data => setLegoSets(data))

        fetch('http://localhost:9292/owners')
        .then(res => res.json())
        .then(data => setOwners(data))

        fetch('http://localhost:9292/genres')
        .then(res => res.json())
        .then(data => setGenres(data))
        
    }, [])

    const addSet = (stuff) => {
        // I'm adding it to lego_sets, create a set, 
        // inform the backend
        // update lego_sets (in state)
        // ???If we went along this way, I would be updating user's sets
        // updating genre's sets
    }

    return (
        <MyContext.Provider value={{
            legoSets: legoSets,
            owners: owners,
            genres: genres,
            addSet: addSet
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer }