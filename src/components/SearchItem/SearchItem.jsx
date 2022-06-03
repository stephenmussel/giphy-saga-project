import { useDispatch } from 'react-redux';

function SearchItem({ gif }) {

    const dispatch = useDispatch();

    const createFavorite = () => {
        console.log('clicked favorite!');

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

            <button onClick={createFavorite}>favorite</button>
        </div>
    )
}

export default SearchItem;