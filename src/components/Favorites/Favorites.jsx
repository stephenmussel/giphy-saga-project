import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

function Favorites() {

    // provides redux store to component including the favorite reducer
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

        const action = { type: 'SORT_BY', payload: event.target.value };
        dispatch(action);
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
            Sort By Id: {sortCat}

            {/* maps thru list from favorite reducer to display each gif */}
            {/* {favorites.map(each => (
                <div key={each.id}>
                    <FavoritesItem
                        each={each}
                    />
                </div>
            ))} */}
            {favorites.map(each => (
                <div key={each.id}>
                    {sortCat === "n/a" ?
                    <FavoritesItem each={each} /> :
                    sortCat === `${each.category_id}` ?
                    <FavoritesItem each={each} /> : "" }

                   
                </div>
            ))}
        </div>
    )
}

export default Favorites;