import { create } from 'apisauce';

//TODO: Use environment variables to dynamically set the baseURL

/* Access to the API */
const apiClient = create({
    baseURL: "http://10.70.242.223:8080"
});

export default apiClient;