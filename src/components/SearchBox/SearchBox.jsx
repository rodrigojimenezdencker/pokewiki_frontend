import React from 'react'

import './SearchBox.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className="search"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
    />
)