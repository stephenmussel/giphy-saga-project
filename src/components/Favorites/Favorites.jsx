import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Favorites() {

    const favorites = useSelector(store => store.favorite)
    const dispatch = useDispatch();

    const fetchFavorites = () => {
        console.log('in fetchFavorites!');

        dispatch({type: 'FETCH_FAVORITES'});
    };

    useEffect(() => {
        console.log('in useEffect');
        fetchFavorites();
    }, [])

    return (
        <>
            <h3>Favorites...</h3>
        </>
    )
}

export default Favorites;