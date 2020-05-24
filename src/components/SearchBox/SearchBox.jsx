import React from 'react'

import './SearchBox.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className="searchbox"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
    />
)