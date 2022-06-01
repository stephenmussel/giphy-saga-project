import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function FavoritesItem({ each }) {

    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    const addCategory = (event) => {
        console.log('in addCategory!');
        console.log('category selected: ', event.target.value);
        console.log('each: ', each.id);

        const action = {type: 'ADD_CATEGORY', payload: each.id, category_id: event.target.value};
        dispatch(action);
    }

    return(
        <div>
            <img 
                key={each.id} 
                src={each.url}
                alt="giphs"
                style={{marginTop: 25, marginBottom: 5}}
            /><br />
            <select onChange={addCategory}>

                {/* value represent category id */}
                <option value="1">funny</option>
                <option value="2">cohort</option>
                <option value="3">cartoon</option>
                <option value="4">nsfw</option>
                <option value="5">meme</option>
            </select>
        </div>
    )
}

export default FavoritesItem;