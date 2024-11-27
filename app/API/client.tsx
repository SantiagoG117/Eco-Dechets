import { create } from 'apisauce';

//TODO: Use environment variables to dynamically set the baseURL

/* Access to the API */
const apiClient = create({
    baseURL: "http://10.70.249.66:8080"
});

export default apiClient;