import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

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
            <h1>Favorites...</h1>
            {/* {JSON.stringify(favorites)} */}
            {favorites.map(each => (
                <FavoritesItem 
                    each={each}
                    key={each.id}
                />
            ))}
        </>
    )
}

export default Favorites;