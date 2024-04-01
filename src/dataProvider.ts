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
    } else {
      return Promise.reject({ message: "Unsupported resource type" });
    }
  },
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
      .then(({ json }) => ({
        data: json.data,
        total: json.total, // Assuming the backend returns the total count in the response
      }))
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
