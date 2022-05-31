import axios from 'axios';
import { useState } from 'react';

function Search() {

    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked search!');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='search GIPHY'
                    style={{marginRight: 5}}
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