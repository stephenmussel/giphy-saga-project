import { useDispatch } from 'react-redux';
import { useState } from 'react';

function SearchItem({ gif }) {

    const dispatch = useDispatch();
    const [button, setButton] = useState(true);

    const createFavorite = () => {
        console.log('clicked favorite!');
        setButton(!button);

        // sends favorite gif (url) to createFavorite saga
        const action = { type: 'CREATE_FAVORITE', payload: gif };
        dispatch(action);
    }

    return (
        <div>
            <img
                src={gif}
                alt="gif"
                style={{ marginTop: 25, marginBottom: 5 }}
            /><br />
            {button ? <button onClick={createFavorite}>favorite</button> : <button onClick={createFavorite}>unfavorite</button>}
            {/* <button onClick={createFavorite}>favorite</button> */}
            {/* <button onClick={createFavorite}>favorite</button> */}
        </div>
    )
}

export default SearchItem;