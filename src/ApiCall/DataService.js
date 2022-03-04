import axios from 'axios';

const loginAPI='http://localhost:8080/api/SignUp';
class DataService{
    getAllUsers(){
        return axios.get(loginAPI);
    }
    createUser(UserData){
        return axios.post(loginAPI, UserData)
    }
}
export default new DataService();