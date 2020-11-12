import React from "react";

import image from '../../components/Profile/photo.JPG'

function ProfilePhoto() {
    return (
        <div>
            <img src={image} alt="#" height={500} width={500} />
        </div>
    );
}
export default ProfilePhoto;