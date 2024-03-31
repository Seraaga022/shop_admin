// import simpleRestProvider from "ra-data-simple-rest";

// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL
// );

import {
  CreateParams,
  UpdateParams,
  DataProvider,
  fetchUtils,
} from "react-admin";

const endpoint = import.meta.env.VITE_SIMPLE_REST_URL; // Your backend endpoint

type CategoryParams = {
  id: string;
  name: string;
  description: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createCategoryFormData = (
  params: CreateParams<CategoryParams> | UpdateParams<CategoryParams>,
  resource: string
) => {
  const formData = new FormData();
  params.data.name && formData.append("name", params.data.name);
  params.data.description &&
    formData.append("description", params.data.description);
  params.data.image?.rawFile &&
    formData.append("image", params.data.image.rawFile);

  return formData;
};

export const dataProvider: DataProvider = {
  // create: (resource, params) => {
  //   if (resource === "category") {
  //     const formData = createCategoryFormData(params);
  //     return fetchUtils
  //       .fetchJson(`${endpoint}/${resource}`, {
  //         method: "POST",
  //         body: formData,
  //       })
  //       .then(({ json }) => ({ data: json }))
  //       .catch((error) => {
  //         return Promise.reject({ message: error.message });
  //       });
  //   }
  //   return Promise.reject({ message: "Unsupported resource type" });
  // },
  // update: (resource, params) => {
  //   const formData = createCategoryFormData(params); // Adjust this for other resources
  //   return fetchUtils
  //     .fetchJson(`${endpoint}/${resource}/${params.id}`, {
  //       method: "PUT",
  //       body: formData,
  //     })
  //     .then(({ json }) => ({ data: json }))
  //     .catch((error) => {
  //       return Promise.reject({ message: error.message });
  //     });
  // },
  create: (resource, params) => {
    if (resource === "category") {
      const formData = createCategoryFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    }
    return Promise.reject({ message: "Unsupported resource type" });
  },
  update: (resource, params) => {
    const formData = createCategoryFormData(params);
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}/${params.id}`, {
        method: "PUT",
        body: formData,
      })
      .then(({ json }) => ({ data: json }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  getList: (resource, params) => {
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}`, {
        method: "GET",
      })
      .then(({ json }) => ({ data: json.data, total: json.total }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  getOne: (resource, params) => {
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}/${params.id}`, {
        method: "GET",
      })
      .then(({ json }) => ({ data: json }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  getMany: (resource, params) => {
    // Assuming your API supports fetching multiple records by ID
    const query = params.ids.map((id) => `id=${id}`).join("&");
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}?${query}`, {
        method: "GET",
      })
      .then(({ json }) => ({ data: json }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  getManyReference: (resource, params) => {
    // Assuming your API supports fetching records by a reference field
    const query = `reference=${params.target}&referenceId=${params.id}`;
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}?${query}`, {
        method: "GET",
      })
      .then(({ json }) => ({ data: json.data, total: json.total }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  // updateMany: (resource, params) => {
  //   // This method might not be directly supported by your API, so you might need to implement it manually
  //   // by iterating over the ids and calling the update method for each one.
  //   const promises = params.ids.map((id) =>
  //     fetchUtils.fetchJson(`${endpoint}/${resource}/${id}`, {
  //       method: "PUT",
  //       body: JSON.stringify(params.data),
  //     })
  //   );
  //   return Promise.all(promises)
  //     .then((responses) => ({ data: responses.map(({ json }) => json) }))
  //     .catch((error) => {
  //       return Promise.reject({ message: error.message });
  //     });
  // },
  updateMany: (resource, params) => {
    const promises = params.ids.map((id) =>
      fetchUtils.fetchJson(`${endpoint}/${resource}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params.data),
      })
    );
    return Promise.all(promises)
      .then((responses) => ({ data: responses.map(({ json }) => json) }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  delete: (resource, params) => {
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}/${params.id}`, {
        method: "DELETE",
      })
      .then(({ json }) => ({ data: json })) // Assuming json contains the deleted record
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  deleteMany: (resource, params) => {
    // Similar to updateMany, this might need to be implemented manually
    const promises = params.ids.map((id) =>
      fetchUtils.fetchJson(`${endpoint}/${resource}/${id}`, {
        method: "DELETE",
      })
    );
    return Promise.all(promises)
      .then(() => ({ data: params.ids }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
};

// export const dataProvider: DataProvider = {
//   // Other methods...
//   create: (resource, params) => {
//     if (resource === "category") {
//       const formData = createCategoryFormData(params);
//       return fetchUtils
//         .fetchJson(`${endpoint}/${resource}`, {
//           method: "POST",
//           body: formData,
//         })
//         .then(({ json }) => ({ data: json }))
//         .catch((error) => {
//           // Handle the error appropriately and return a rejected promise
//           // with an object that matches the CreateResult type
//           return Promise.reject({ message: error.message });
//         });
//     }

//     // For other resources, you should return a rejected promise with an appropriate error message
//     return Promise.reject({ message: "Unsupported resource type" });
//   },
// };

// dataProvider.ts
// import simpleRestDataProvider from "ra-data-simple-rest";
// import {
//   CreateParams,
//   UpdateParams,
//   DataProvider,
//   fetchUtils,
// } from "react-admin";

// const endpoint = import.meta.env.VITE_SIMPLE_REST_URL;
// const baseDataProvider = simpleRestDataProvider(endpoint);

// type ProductParams = {
//   id: string;
//   category_id: string;
//   name: string;
//   description: string;
//   price: string;
//   image: {
//     rawFile: File;
//     src?: string;
//     title?: string;
//   };
// };

// const createProductFormData = (
//   params: CreateParams<ProductParams> | UpdateParams<ProductParams>
// ) => {
//   const formData = new FormData();
//   params.data.category_id &&
//     formData.append("category_id", params.data.category_id);
//   params.data.name && formData.append("name", params.data.name);
//   params.data.description &&
//     formData.append("description", params.data.description);
//   params.data.price && formData.append("price", params.data.price);
//   params.data.image?.rawFile &&
//     formData.append("image", params.data.image.rawFile);

//   return formData;
// };

// export const dataProvider: DataProvider = {
//   ...baseDataProvider,
//   create: (resource, params) => {
//     if (resource === "product") {
//       const formData = createProductFormData(params);
//       return fetchUtils
//         .fetchJson(`${endpoint}/${resource}`, {
//           method: "POST",
//           body: formData,
//         })
//         .then(({ json }) => ({ data: json }));
//     }

//     return baseDataProvider.create(resource, params);
//   },
//   update: (resource, params) => {
//     if (resource === "product") {
//       const formData = createProductFormData(params);
//       formData.append("id", params.id);
//       return fetchUtils
//         .fetchJson(`${endpoint}/${resource}/${params.id}`, {
//           method: "PUT",
//           body: formData,
//         })
//         .then(({ json }) => ({ data: json }));
//     }

//     return baseDataProvider.update(resource, params);
//   },
// };

// import simpleRestDataProvider from "ra-data-simple-rest";
// import {
//   CreateParams,
//   UpdateParams,
//   DataProvider,
//   fetchUtils,
// } from "react-admin";

// const endpoint = import.meta.env.VITE_SIMPLE_REST_URL;
// const baseDataProvider = simpleRestDataProvider(endpoint);

// // Define the type for ProductParams
// type ProductParams = {
//   id: string;
//   category_id: string;
//   name: string;
//   description: string;
//   price: string;
//   image: {
//     rawFile: File;
//     src?: string;
//     title?: string;
//   };
// };

// // Define the type for CategoryParams
// type CategoryParams = {
//   id: string;
//   name: string;
//   description: string;
//   image: {
//     rawFile: File;
//     src?: string;
//     title?: string;
//   };
// };

// // Function to create FormData for products and categories
// const createFormData = (
//   params:
//     | CreateParams<ProductParams | CategoryParams>
//     | UpdateParams<ProductParams | CategoryParams>,
//   resource: string
// ) => {
//   const formData = new FormData();
//   params.data.id && formData.append("id", params.data.id);
//   params.data.name && formData.append("name", params.data.name);
//   params.data.description &&
//     formData.append("description", params.data.description);

//   // Conditionally append price and category_id only for products
//   if (resource === "product") {
//     // Manually assert params.data as ProductParams to access product-specific fields
//     const productData = params.data as ProductParams;
//     productData.price && formData.append("price", productData.price);
//     productData.category_id &&
//       formData.append("category_id", productData.category_id);
//   }

//   params.data.image?.rawFile &&
//     formData.append("image", params.data.image.rawFile);

//   return formData;
// };

// export const dataProvider: DataProvider = {
//   ...baseDataProvider,
//   create: (resource, params) => {
//     const formData = createFormData(params, resource);
//     return fetchUtils
//       .fetchJson(`${endpoint}/${resource}`, {
//         method: "POST",
//         body: formData,
//       })
//       .then(({ json }) => ({ data: json }));
//   },
//   update: (resource, params) => {
//     const formData = createFormData(params, resource);
//     return fetchUtils
//       .fetchJson(`${endpoint}/${resource}/${params.id}`, {
//         method: "PUT",
//         body: formData,
//       })
//       .then(({ json }) => ({ data: json }));
//   },
// };
