import axios from 'axios';
import { useState } from 'react';

function Search() {

    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked search!');

        console.log('this is input: ', search);
        setSearch('') // clears input
    }

    return(
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
    )
}

export default Search;