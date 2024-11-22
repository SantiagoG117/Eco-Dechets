import { create } from 'apisauce';

/* Access to the API */
const apiClient = create({
    baseURL: "http://192.168.68.118:8080"
});

export default apiClient;