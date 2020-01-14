import React from 'react'
import ReactDOM from 'react-dom';

const names = ['react','vue','jQuery','zepto','angular']



const ul = (
    <ul>
        {
            names.map((name, index) => <li key={index}>{name}</li>)
        }
    </ul>
)

export default ul