import { useDispatch } from 'react-redux';

function SearchItem({ gif, i }) {

    const dispatch = useDispatch();

    const addFavorite = () => {
        console.log('clicked favorite!');

        const action = {type: 'ADD_FAVORITE', payload: gif};
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
        <button onClick={addFavorite}>favorite</button>
        </div>
    )
}

export default SearchItem;