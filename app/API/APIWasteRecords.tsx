import client from './client';

const endpoint = '/wasteRecords'


const CreateWasteRecord = (username: string, wasteItemID: number, unitOfMeasurement: string, categoryID: number) => {
    
    //Data we wish to send to the server
    const payload = {
        username,
        wasteItemID,
        unitOfMeasurement,
        categoryID
    };

    return client.post(endpoint, payload)
};

export default {
    CreateWasteRecord
};
