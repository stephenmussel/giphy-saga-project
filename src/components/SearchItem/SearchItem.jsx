import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function SearchItem({ gif }) {

    const dispatch = useDispatch();

    // toggles button from `favorite` to `unfavorite`
    const [button, setButton] = useState(true);
    const favorite = useSelector(store => store.favorite);

    const createFavorite = () => {
        console.log('clicked favorite!');
        setButton(!button);

        // sends favorite gif (url) to createFavorite saga
        const action = { type: 'CREATE_FAVORITE', payload: gif };
        dispatch(action);
    }

    // only allows you to favorite gif once
    const unFavorite = () => {
        console.log('clicked unFavorite!');
        console.log('unFavorite gif:', gif);
        setButton(!button);

        dispatch({ type: 'UN_FAV', payload: gif });
    }

    return (
        <div>
            <p>favorite reducer: {JSON.stringify(favorite)}</p>
            <img
                src={gif}
                alt="gif"
                style={{ marginTop: 25, marginBottom: 5 }}
            /><br />
            {button ? <button onClick={createFavorite}>favorite</button> : <button onClick={() => unFavorite(gif)}>unfavorite</button>}
            {/* <button onClick={createFavorite}>favorite</button> */}
        </div>
    )
}

export default SearchItem;