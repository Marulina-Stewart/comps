import React from 'react';
const Name = {
    FirstName: 'Marulina', LastName: 'Stewart'
}
const names = () => {
    return (
        <div classname="Name">
            <div classname="Name">    <h1> {Name.FirstName} </h1>
                <h1> {Name.LastName}</h1></div>
        </div>

    );
}

export default names