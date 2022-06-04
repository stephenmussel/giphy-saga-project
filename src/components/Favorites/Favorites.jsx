import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

function Favorites() {

    // provides redux store to component including the favorite reducer
    const favorites = useSelector(store => store.favorite)
    const dispatch = useDispatch();

    const [sortCat, setSortCat] = useState('0')

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
    }

    return (
        <div>
            <h1>Favorites...</h1>
            <div>
                <select onChange={sortBy}>
                    <option value="0">Sort by:</option>
                    <option value="1">Funny</option>
                    <option value="2">Cohort</option>
                    <option value="3">Cartoon</option>
                    <option value="4">NSFW</option>
                    <option value="5">Meme</option>
                </select>
            </div>
            Sort By Id: {sortCat}       

            {/* maps thru favorites list. default state ("0") renders every 
            favorite gif and conditionally renders gifs based on sort category */}
            {favorites.map(each => (
                <div key={each.id}>
                    {sortCat === "0" ? <FavoritesItem each={each} /> :
                        sortCat === `${each.category_id}` ? 
                            <FavoritesItem each={each} /> : ""}
                </div>
            ))}
        </div>
    )
}

export default Favorites;