import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function FavoritesItem({ each }) {

    const [category, setCategory] = useState('n/a');
    const dispatch = useDispatch();

    useEffect(() => {
        checkCat();
    }, [])

    // checks to see if giph has category_id then displays corresponding string value or `n/a` if it doesn't have one.
    const checkCat = () => {
        console.log('in checkCat!');

        switch(each.category_id) {
            case 1:
                setCategory('Funny');
            break;
            case 2:
                setCategory('Cohort');
            break;
            case 3:
                setCategory('Cartoon');
            break;
            case 4:
                setCategory('NSFW');
            break;
            case 5:
                setCategory('Meme');
            break;
            default:
                break;
        }
    }

    const addCategory = (event) => {
        console.log('in addCategory!');
        console.log('category_id selected: ', event.target.value);
        console.log('favGiphId: ', each.id);

        // sending id of favorited giph along with category id
        const action = {type: 'ADD_CATEGORY', payload: each.id, category_id: event.target.value};
        dispatch(action);
    }

    const removeFav = () => {
        console.log('clicked remove with favId:', each.id);

        const action = {type: 'REMOVE_FAV', payload: each.id};
        dispatch(action);
    }

    return(
        <div>
            
            <img 
                key={each.id} 
                src={each.url}
                alt="giphs"
                style={{marginTop: 25}}
            /><br />
            {/* displays category of giph if available */}
            <p><b>Category:</b> {category}</p> 
            <select onChange={addCategory} style={{marginRight: 5}}>

                {/* value represents category id */}
                <option>select category</option>
                <option value="1">funny</option>
                <option value="2">cohort</option>
                <option value="3">cartoon</option>
                <option value="4">nsfw</option>
                <option value="5">meme</option>
            </select>
            <button onClick={() => removeFav(each.id)}>remove</button>
            
        </div>
    )
}

export default FavoritesItem;