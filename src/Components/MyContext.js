import React, { useState, useEffect } from 'react'

export const MyContext = React.createContext()

const MyProvider = (props) => {
    const [legoSets, setLegoSets] = useState([])
    const [owners, setOwners] = useState([])
    const [genres, setGenres] = useState([])
    const [sort, setSort] =useState("name")
    const [search, setSearch] = useState("")


    useEffect(() => {
        fetch(`http://localhost:9292/lego_sets/${sort}`)
        .then(res => res.json())
        .then(data => setLegoSets(data))
    }, [sort])

    useEffect(() =>{
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

    const updateSort = (newArg) => {
        console.log(newArg)
        setSort(newArg)
    }
    console.log(sort)

    const updateSearch = (searchedInfo) => {
        setSearch(searchedInfo)
    }

    const displaySets = legoSets.filter((set) => set.name.toLowerCase().includes(search.toLowerCase()));
    
    
    return (
        <MyContext.Provider value={{
            legoSets: displaySets,
            owners: owners,
            genres: genres,
            addSet: addSet,
            updateSet: updateSet,
            updateSort: updateSort,
            updateSearch: updateSearch
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer }