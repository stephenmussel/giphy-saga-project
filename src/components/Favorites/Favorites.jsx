import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

function Favorites() {

    const favorites = useSelector(store => store.favorite)
    const dispatch = useDispatch();

    const [sortCat, setSortCat] = useState('n/a')

    const fetchFavorites = () => {
        console.log('in fetchFavorites!');

        dispatch({ type: 'FETCH_FAVORITES' });
    };

    useEffect(() => {
        console.log('in useEffect');
        fetchFavorites();
    }, [])

    const sortBy = (event) => {
        console.log('in sortBy!');
        setSortCat(event.target.value);
        console.log('catId:', sortCat);
    }

    return (
        <div>
            <h1>Favorites...</h1>
            <div>
                <select onChange={sortBy}>
                    <option>Sort by:</option>
                    <option value="1">Funny</option>
                    <option value="2">Cohort</option>
                    <option value="3">Cartoon</option>
                    <option value="4">NSFW</option>
                    <option value="5">Meme</option>
                </select>
            </div>
            {/* {JSON.stringify(favorites)} */}
            {favorites.map(each => (
                <FavoritesItem
                    each={each}
                    key={each.id}
                />
            ))}
        </div>
    )
}

export default Favorites;