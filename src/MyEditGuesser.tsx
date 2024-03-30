// // import React, { useState } from "react";
// // import {
// //  Edit,
// //  SimpleForm,
// //  TextInput,
// //  ImageInput,
// // } from "react-admin";
// // import { useForm } from "react-final-form"; // Correct import from 'react-final-form'


// // const CustomImageInput = ({ onChange }) => {
// //  const form = useForm();
// //  const [file, setFile] = useState(null);

// //  const handleImageChange = (event) => {
// //     const selectedFile = event.target.files[0];
// //     setFile(selectedFile);
// //     onChange(selectedFile);
// //  };

// //  return (
// //     <div>
// //       <input
// //         title="enter category image"
// //         type="file"
// //         onChange={handleImageChange}
// //       />
// //     </div>
// //  );
// // };

// // const Base64ImageInput = ({ source, record = {}, ...rest }) => {
// //  const base64String = record[source];
// //  const dataUrl = `data:image/png;base64,${base64String}`;
// //  return (
// //     <ImageInput
// //       source={source}
// //       record={{ ...record, [source]: dataUrl }}
// //       {...rest}
// //     />
// //  );
// // };

// // const MyEditGuesser = (props) => {
// //  const [image, setImage] = useState<string>(null);

// //  const handleImageUpload = (file) => {
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         const image = (reader.result as string)
// //           .replace("data:", "")
// //           .replace(/^.+,/, "");
// //         setImage(image);
// //         // Here, you would update the form data with the base64 string
// //         form.change("image", image);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //  };

// //  return (
// //     <Edit {...props}>
// //       <SimpleForm>
// //         <TextInput source="id" label="id" />
// //         <TextInput source="name" label="name" />
// //         <TextInput source="PCI" label="parent category id" />
// //         <TextInput source="description" label="description" />
// //         <CustomImageInput onChange={handleImageUpload} />
// //         {image && (
// //           <img
// //             src={`data:image/png;base64,${image}`}
// //             width={150}
// //             height={100}
// //             alt="Preview"
// //           />
// //         )}
// //         <Base64ImageInput source="image" title="Image" />
// //       </SimpleForm>
// //     </Edit>
// //  );
// // };

// // export default MyEditGuesser;

// import React, { useState } from "react";
// import {
//  Edit,
//  SimpleForm,
//  TextInput,
// //  ImageInput,
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
//       <input
//         title="enter category image"
//         type="file"
//         onChange={handleImageChange}
//       />
//     </div>
//  );
// };

// // const Base64ImageInput = ({ source, record = {}, ...rest }) => {
// //  const base64String = record[source];
// //  const dataUrl = `data:image/png;base64,${base64String}`;
// //  return (
// //     <ImageInput
// //       source={source}
// //       record={{ ...record, [source]: dataUrl }}
// //       {...rest}
// //     />
// //  );
// // };

// const MyEditGuesser = (props) => {
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
//     <Edit {...props}>
//       <SimpleForm>
//         <TextInput source="id" label="id" />
//         <TextInput source="name" label="name" />
//         <TextInput source="PCI" label="parent category id" />
//         <TextInput source="description" label="description" />
//         <CustomImageInput onChange={handleImageUpload} />
//         {image && (
//           <img
//             src={`data:image/png;base64,${image}`}
//             width={150}
//             height={100}
//             alt="Preview"
//           />
//         )}
//         {/* <Base64ImageInput source="image" title="Image" /> */}
//       </SimpleForm>
//     </Edit>
//  );
// };

// export default MyEditGuesser;


import React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';
import ImageInput from './ImageInput'; // Adjust the import path as necessary

const MyEditGusser = (props) => (
 <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="description" multiline={true} label="description" validate={[required()]} />
      <TextInput source="PCI" multiline={true} label="parent category id OR empty if its parent" fullWidth />
      <TextInput source="title" />
      <ImageInput source="image" />
      {/* Add other fields as needed */}
    </SimpleForm>
 </Edit>
);

export default MyEditGusser;