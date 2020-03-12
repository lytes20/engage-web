import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:3000/"
});

const api = {
  getContacts: async () => {
    const response = await apiRequest.get("contacts");
    return response.data;
  },
  updatecontact: async (contactID, data) => {
    const response = await apiRequest.patch(`contacts/${contactID}`, {
      name: data
    });
    return response;
  }
};

export default api;
