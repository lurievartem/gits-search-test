import React, { memo, useState, useCallback } from "react";
import "./Seacrh.css";

const Search = ({ submit }) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onKeyPress = useCallback((event) => {
        if(event.key === 'Enter'){
            submit && submit(value);
        }
    }, [value, submit]);

    return (
        <div className="search-form">
            <input
                id="search"
                type="text"
                placeholder="Search Github"
                onChange={onChange}
                onKeyPress={onKeyPress}
                value={value}
            />
        </div>
    );
};

export default memo(Search);
