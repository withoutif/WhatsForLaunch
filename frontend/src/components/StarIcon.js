import React from 'react';

const SVG = ({
    style = {},
    fill = '#6c2402',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 32 32',
}) =>(
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path fill={fill} stroke="#000" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
    </svg>
);

export default SVG;