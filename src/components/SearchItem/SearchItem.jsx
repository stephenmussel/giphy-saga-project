import { useDispatch } from 'react-redux';

function SearchItem({ gif, i }) {

    const dispatch = useDispatch();

    const createFavorite = () => {
        console.log('clicked favorite!');

        // NUM 2: sends favorite `gif` (url) to addFavorite saga
        const action = {type: 'CREATE_FAVORITE', payload: gif};
        dispatch(action);
    }

    return(
        <div>
        <img 
            key={i} 
            src={gif}
            alt="images"
            style={{marginTop: 25, marginBottom: 5}}
        /><br />

        {/* NOTES 1-14 */}
        {/* NUM 1: click favorite button */}
        <button onClick={createFavorite}>favorite</button>
        </div>
    )
}

export default SearchItem;