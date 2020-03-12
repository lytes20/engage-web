import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:3000/"
});

const api = {
  getContacts: async () => {
    const response = await apiRequest.get("contacts");
    return response.data;
  },
  createContact: async (data) => {
    const response = await apiRequest.post("contacts", data);
    return response.data;
  },
  updateContact: async (contactID, data) => {
    const response = await apiRequest.patch(`contacts/${contactID}`, {
      ...data
    });
    return response;
  }
};

export default api;
