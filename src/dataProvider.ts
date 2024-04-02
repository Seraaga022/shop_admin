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

const endpoint = import.meta.env.VITE_SIMPLE_REST_URL;

type CategoryParams = {
  id: string;
  name: string;
  PCI: string;
  description: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createCategoryFormData = (
  params: CreateParams<CategoryParams> | UpdateParams<CategoryParams>
  // resource: string
) => {
  const formData = new FormData();
  params.data.PCI && formData.append("PCI", params.data.PCI);
  params.data.name && formData.append("name", params.data.name);
  params.data.description &&
    formData.append("description", params.data.description);
  params.data.image?.rawFile &&
    formData.append("image", params.data.image.rawFile);

  return formData;
};

type CustomerParams = {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createCustomerFormData = (
  params: CreateParams<CustomerParams> | UpdateParams<CustomerParams>
) => {
  const formData = new FormData();
  params.data.name && formData.append("name", params.data.name);
  params.data.email && formData.append("email", params.data.email);
  params.data.phone && formData.append("phone", params.data.phone);
  params.data.image?.rawFile &&
    formData.append("image", params.data.image.rawFile);

  return formData;
};

type ProductParams = {
  id: string;
  name: string;
  description: string;
  price: string;
  Cat: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createProductFormData = (
  params: CreateParams<ProductParams> | UpdateParams<ProductParams>
) => {
  const formData = new FormData();
  params.data.name && formData.append("name", params.data.name);
  params.data.description &&
    formData.append("description", params.data.description);
  params.data.price && formData.append("price", params.data.price);
  params.data.Cat && formData.append("Cat", params.data.Cat);
  params.data.image?.rawFile &&
    formData.append("image", params.data.image.rawFile);

  return formData;
};

type PaymentParams = {
  id: string;
  order_id: string;
  payment_method: string;
  amount: string;
};

const createPaymentFormData = (
  params: CreateParams<PaymentParams> | UpdateParams<PaymentParams>
) => {
  const formData = new FormData();
  params.data.id && formData.append("id", params.data.id);
  params.data.amount && formData.append("amount", params.data.amount);
  params.data.order_id && formData.append("order_id", params.data.order_id);
  params.data.payment_method &&
    formData.append("payment_method", params.data.payment_method);

  return formData;
};

type AddressParams = {
  id: string;
  order_id: string;
  recipient_name: string;
  address: string;
  state: string;
  country: string;
  city: string;
  postal_code: string;
};

const createAddressFormData = (
  params: CreateParams<AddressParams> | UpdateParams<AddressParams>
) => {
  const formData = new FormData();
  params.data.id && formData.append("id", params.data.id);
  params.data.order_id && formData.append("order_id", params.data.order_id);
  params.data.recipient_name &&
    formData.append("recipient_name", params.data.recipient_name);
  params.data.address && formData.append("address", params.data.address);
  params.data.state && formData.append("state", params.data.state);
  params.data.country && formData.append("country", params.data.country);
  params.data.city && formData.append("city", params.data.city);
  params.data.postal_code &&
    formData.append("postal_code", params.data.postal_code);

  return formData;
};

export const dataProvider: DataProvider = {
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
    } else if (resource === "customer") {
      const formData = createCustomerFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "product") {
      const formData = createProductFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "payment") {
      const formData = createPaymentFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "address") {
      const formData = createAddressFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else {
      return Promise.reject({ message: "Unsupported resource type" });
    }
  },
  update: (resource, params) => {
    if (resource === "category") {
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
    } else if (resource === "customer") {
      const formData = createCustomerFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "product") {
      const formData = createProductFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "payment") {
      const formData = createPaymentFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "address") {
      const formData = createAddressFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else {
      return Promise.reject({ message: "Unsupported resource type" });
    }
  },
  // getList: (resource, params) => {
  //   const { page, perPage } = params.pagination;
  //   const { field, order } = params.sort;
  //   const query = {
  //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //     sort: JSON.stringify([field, order]),
  //     filter: JSON.stringify(params.filter),
  //   };

  //   // Construct the query string
  //   const queryString = fetchUtils.queryParameters(query);

  //   // Make the GET request with the query string
  //   return fetchUtils
  //     .fetchJson(`${endpoint}/${resource}?${queryString}`, {
  //       method: "GET",
  //     })
  //     .then(({ json, headers }) => ({
  //       const contentRange = headers.get('Content-Range');
  //       const totalCount = contentRange ? parseInt(contentRange.split('/')[1], 10) : 0;

  //       return {
  //         data: json.data,
  //         total: json.totalCount
  //       }
  //     }))
  //     .catch((error) => {
  //       return Promise.reject({ message: error.message });
  //     });
  // },
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      sort: JSON.stringify([field, order]),
      filter: JSON.stringify(params.filter),
    };

    // Construct the query string
    const queryString = fetchUtils.queryParameters(query);

    // Make the GET request with the query string
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}?${queryString}`, {
        method: "GET",
      })
      .then(({ json, headers }) => {
        // Extract the total count from the Content-Range header
        const contentRange = headers.get("Content-Range");
        const totalCount = contentRange
          ? parseInt(contentRange.split("/")[1], 10)
          : 0;

        return {
          data: json.data,
          total: totalCount, // Return the total count
        };
      })
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
