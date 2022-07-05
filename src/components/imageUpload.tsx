import React from 'react';
import axios from "axios";

const ImageUpload = () => {

const upload = async (files: FileList | null) => {
        if (files === null) return;

        const formData = new FormData();
        formData.append('image', files[0]);

         await axios.put('users/upload', formData);


    }

    return (
        <label className="btn btn-primary">
            Upload <input type="file" hidden onChange={event => upload(event.target.files)}/>
        </label>
    );
};

export default ImageUpload;