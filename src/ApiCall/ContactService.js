import axios from 'axios';

const contactApi='http://localhost:8080/api/Contact'
class ContactService{
    getAllContacts(){
        return axios.get(contactApi)
    }
    createContact(contact){
        return axios.post(contactApi,contact)
    }
}export default new ContactService();