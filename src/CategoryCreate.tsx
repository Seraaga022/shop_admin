// import React, { useState } from "react";
// import {
//  Create,
//  SimpleForm,
//  TextInput,
//  required,
//  ImageField,
// } from "react-admin";

// const CustomImageInput = ({ onChange }) => {
//  const [file, setFile] = useState(null);

//  const handleImageChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     onChange(selectedFile);
//  };

//  return (
//     <div>
//       category image
//       <input
//         title="enter category image"
//         type="file"
//         onChange={handleImageChange}
//         required
//       />
//     </div>
//  );
// };

// export const CategoryCreate = (props) => {
//  const [image, setImage] = useState<string>(null);

//  const handleImageUpload = (file) => {
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const image = (reader.result as string)
//           .replace("data:", "")
//           .replace(/^.+,/, "");
//         setImage(image);
//         // Here, you would update the form data with the base64 string
//         // Assuming you have a way to update the form data from here
//       };
//       reader.readAsDataURL(file);
//     }
//  };

//  return (
//     <Create {...props}>
//       <SimpleForm>
//         <TextInput source="name" validate={[required()]} fullWidth />
//         <TextInput source="description" multiline={true} label="description" validate={[required()]} />
//         <TextInput source="PCI" multiline={true} label="parent category id OR empty if its parent" fullWidth />
//         <CustomImageInput onChange={handleImageUpload} />
//         {image && (
//           <ImageField
//             source="image"
//             title="Image"
//             src={`data:image/png;base64,${image}`}
//           />
//         )}
//       </SimpleForm>
//     </Create>
//  );
// };

import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";
import ImageInput from "./ImageInput"; // Adjust the import path as necessary

const MyCategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput
        source="description"
        multiline={true}
        label="description"
        validate={[required()]}
      />
      <TextInput
        source="PCI"
        multiline={true}
        label="parent category id OR empty if its parent"
        fullWidth
      />
      <TextInput source="title" />
      <ImageInput source="image" />
      {/* Add other fields as needed */}
    </SimpleForm>
  </Create>
);

export default MyCategoryCreate;
