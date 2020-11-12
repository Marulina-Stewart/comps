import React from 'react';
const address = {
    id: 1, name: 'Tunis center'
}
function Address() {
    return (
        <div classname="Address">
            <div key={address.id} classname="address">  <h1> {address.name} </h1></div>
        </div>


    );
}

export default Address