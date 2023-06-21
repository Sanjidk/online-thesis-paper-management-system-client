import React from 'react';

const SharedButton = ({children}) => {
    return (
        <button className="btn btn-primary mb-16">{children}</button>
    );
};

export default SharedButton;