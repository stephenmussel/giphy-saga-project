import axios from 'axios';
import { useState } from 'react';
import SearchItem from '../SearchItem/SearchItem';

function Search() {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked search!');

        console.log('this is input: ', search);
        setSearch('') // clears input

        axios.post('/api/search', {search: search})
            .then(response => {
                console.log('response.data: ', response.data);
                console.log('response.data...: ', response.data[0].images.original.url); //success, found giphy!
                setResults(response.data)
            }).catch(err => {
                console.log('err in search: ', err);
            });
    };

    return(
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='search GIPHY'
                    style={{marginRight: 5}}
                    onChange={(event) => setSearch(event.target.value)}
                    value={search} // helps to clear input field later
                />
                <input 
                    type='submit'
                    value='search'
                />
            </form>
            </div>
            <div>
                <h1>Results...</h1>
                {/* {JSON.stringify(results)} */}
                {results.map((gif, i) => (
                    <SearchItem 
                        key={i}
                        gif={gif.images.original.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search;