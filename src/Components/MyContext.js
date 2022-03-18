import React, { useState, useEffect } from 'react'

export const MyContext = React.createContext()

const MyProvider = (props) => {
    const [legoSets, setLegoSets] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/lego_sets')
        .then(res => res.json())
        .then(data => setLegoSets(data))
    }, [])

    const [owners, setOwners] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/owners')
        .then(res => res.json())
        .then(data => setOwners(data))
    }, [])

    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/genres')
        .then(res => res.json())
        .then(data => setGenres(data))
    }, [])


    return (
        <MyContext.Provider value={{
            legoSets: legoSets,
            owners: owners,
            genres: genres
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer }