import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateClass = () => {
    const classes = useLoaderData();
    console.log(classes);
    return (
        <div>
            
        </div>
    );
};

export default UpdateClass;