import React from "react";
import PropTypes from 'prop-types';

export const GifGridItem=({ title, src, id })=>{
    return(
        <div className="card">
            <img src={src} alt={title} />
            <p> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}