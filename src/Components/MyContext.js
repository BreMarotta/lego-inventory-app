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

    const addSet = (data, props) => {
        setLegoSets([...legoSets, data])
        props.history.push('/lego_collection')
    }

    const updateSet = (data) => {
        const updatedSetsList = legoSets.map(s => s.id == data.id ? data : s)
        setLegoSets(updatedSetsList)
    }

    return (
        <MyContext.Provider value={{
            legoSets: legoSets,
            owners: owners,
            genres: genres,
            addSet: addSet,
            updateSet: updateSet
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer }