import { useState } from 'react';
import Select from 'react-select';

function CategoryOptions() {

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: "1", label: "Funny" },
        { value: "2", label: "Cohort" },
        { value: "3", label: "Cartoon" },
        { value: "4", label: "NSFW" },
        { value: "5", label: "Meme" },
    ]

    return (
        <div style={{ width: 200 }}>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    )
}

export default CategoryOptions;