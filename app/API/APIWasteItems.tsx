import client from './client'

const endpoint = '/wasteItems/:categoryID';

const getWasteitems = (categoryID :number) => client.get(`/wasteItems/${categoryID}`)

export default {
    getWasteitems
}