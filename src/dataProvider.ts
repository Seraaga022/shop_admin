// import { MaxLength } from "buffer";
import {
  CreateParams,
  UpdateParams,
  DataProvider,
  fetchUtils,
} from "react-admin";
import React, { useContext } from "react";
import { AuthContext, AuthContextType } from "./AuthContext";

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

type AdminLogParams = {
  id: string;
  user_name: string;
  user_id: string;
  action: string;
  ip_address: string;
  action_date: string;
};

const createAdminLogFormData = (
  params: CreateParams<AdminLogParams> | UpdateParams<AdminLogParams>
) => {
  const formData = new FormData();
  params.data.id && formData.append("id", params.data.id);
  params.data.user_id && formData.append("user_id", params.data.user_id);
  params.data.action && formData.append("action", params.data.action);
  params.data.ip_address &&
    formData.append("ip_address", params.data.ip_address);

  return formData;
};

type OrderParams = {
  id: string;
  customer_id: string;
  total_amount: string;
  status: string;
};

const createOrderFormData = (
  params: CreateParams<OrderParams> | UpdateParams<OrderParams>
) => {
  const formData = new FormData();
  params.data.id && formData.append("id", params.data.id);
  params.data.customer_id &&
    formData.append("customer_id", params.data.customer_id);
  params.data.total_amount &&
    formData.append("total_amount", params.data.total_amount);
  params.data.status && formData.append("status", params.data.status);

  return formData;
};

type UserParams = {
  id: string;
  username: string;
  name: string;
  password_hash: string;
  email: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createUserFormData = (
  params: CreateParams<UserParams> | UpdateParams<UserParams>
) => {
  const formData = new FormData();
  params.data.name && formData.append("name", params.data.name);
  params.data.username && formData.append("username", params.data.username);
  params.data.email && formData.append("email", params.data.email);
  params.data.password_hash &&
    formData.append("password_hash", params.data.password_hash);
  params.data.image?.rawFile &&
    formData.append("image", params.data.image.rawFile);

  return formData;
};

type FeedbackParams = {
  id: string;
  admin_name: string;
  ans: string;
};

const createFeedbackFormData = (
  params: CreateParams<FeedbackParams> | UpdateParams<FeedbackParams>
) => {
  const formData = new FormData();
  params.data.id && formData.append("id", params.data.id);
  params.data.ans && formData.append("ans", params.data.ans);

  return formData;
};

type OrderDetailsParams = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: string;
  price: string;
};

const createOrderDetailsFormData = (
  params: CreateParams<OrderDetailsParams> | UpdateParams<OrderDetailsParams>
) => {
  const formData = new FormData();
  params.data.id && formData.append("id", params.data.id);
  params.data.order_id && formData.append("order_id", params.data.order_id);
  params.data.product_id &&
    formData.append("product_id", params.data.product_id);
  params.data.quantity && formData.append("quantity", params.data.quantity);
  params.data.price && formData.append("price", params.data.price);

  return formData;
};

const CreateDataProvider = (authContext: AuthContextType): DataProvider => ({
  create: (resource, params) => {
    const { Admin } = authContext;
    if (resource === "category") {
      const formData = createCategoryFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "adminLog") {
      const formData = createAdminLogFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "order") {
      const formData = createOrderFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "user") {
      const formData = createUserFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "orderDetail") {
      const formData = createOrderDetailsFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
    const { Admin } = authContext;
    if (resource === "category") {
      const formData = createCategoryFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "adminLog") {
      const formData = createAdminLogFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "user") {
      const formData = createUserFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "order") {
      const formData = createOrderFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "feedback") {
      const formData = createFeedbackFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
        })
        .then(({ json }) => ({ data: json }))
        .catch((error) => {
          return Promise.reject({ message: error.message });
        });
    } else if (resource === "orderDetail") {
      const formData = createOrderDetailsFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: new Headers({
            "X-Admin-Name": Admin.name,
            "X-Admin-Id": Admin.id,
          }),
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
    const { Admin } = authContext;
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      sort: JSON.stringify([field, order]),
      filter: JSON.stringify(params.filter),
    };

    // Construct the query string
    const queryString = fetchUtils.queryParameters(query);

    return fetchUtils
      .fetchJson(`${endpoint}/${resource}?${queryString}`, {
        method: "GET",
        headers: new Headers({
          "X-Admin-Name": Admin.name,
          "X-Admin-Id": Admin.id,
        }),
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
    const { Admin } = authContext;
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}/${params.id}`, {
        method: "GET",
        headers: new Headers({
          "X-Admin-Name": Admin.name,
          "X-Admin-Id": Admin.id,
        }),
      })
      .then(({ json }) => ({ data: json }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  getMany: (resource, params) => {
    const { Admin } = authContext;
    const query = params.ids.map((id) => `id=${id}`).join("&");
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}?${query}`, {
        method: "GET",
        headers: new Headers({
          "X-Admin-Name": Admin.name,
          "X-Admin-Id": Admin.id,
        }),
      })
      .then(({ json }) => ({ data: json }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  getManyReference: (resource, params) => {
    const { Admin } = authContext;
    const query = `reference=${params.target}&referenceId=${params.id}`;
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}?${query}`, {
        method: "GET",
        headers: new Headers({
          "X-Admin-Name": Admin.name,
          "X-Admin-Id": Admin.id,
        }),
      })
      .then(({ json }) => ({ data: json.data, total: json.total }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  updateMany: (resource, params) => {
    const { Admin } = authContext;
    const promises = params.ids.map((id) =>
      fetchUtils.fetchJson(`${endpoint}/${resource}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Name": Admin.name,
          "X-Admin-Id": Admin.id,
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
    const { Admin } = authContext;
    return fetchUtils
      .fetchJson(`${endpoint}/${resource}/${params.id}`, {
        method: "DELETE",
        headers: new Headers({
          "X-Admin-Name": Admin.name,
          "X-Admin-Id": Admin.id,
        }),
      })
      .then(({ json }) => ({ data: json })) // Assuming json contains the deleted record
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
  deleteMany: (resource, params) => {
    const { Admin } = authContext;
    const promises = params.ids.map((id) =>
      fetchUtils.fetchJson(`${endpoint}/${resource}/${id}`, {
        method: "DELETE",
        headers: new Headers({
          "X-Admin-Name": Admin.name,
          "X-Admin-Id": Admin.id,
        }),
      })
    );
    return Promise.all(promises)
      .then(() => ({ data: params.ids }))
      .catch((error) => {
        return Promise.reject({ message: error.message });
      });
  },
});

export default CreateDataProvider;
