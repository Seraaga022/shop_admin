import React from 'react';
import { useInput } from 'react-admin';

const ImageInput = ({ source }) => {
 const {
    input: { image, onChange, value },
    meta: { touched, error },
 } = useInput({ source });

 const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result); // Assuming you want to store the base64 string
      };
      reader.readAsDataURL(file);
    }
 };

 return (
    <div>
      <input title='category image' type="file" onChange={handleChange} />
      {touched && error && <span>{error}</span>}
    </div>
 );
};

export default ImageInput;