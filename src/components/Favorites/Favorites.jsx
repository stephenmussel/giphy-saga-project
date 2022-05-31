import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Favorites() {

    const favorites = useSelector(store => store.favorite)

    const fetchFavorites = () => {
        console.log('in fetchFavorites!');
    }

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