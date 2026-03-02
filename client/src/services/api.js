import axios from 'axios';
import { serverUrl } from '../App.jsx';

export const getCurrentUser = async () => {
    try {
        const result = await axios.get(serverUrl + '/api/user/currentuser',
         {withCredentials: true})
         console.log(result.data);

    } catch (error) {
        console.error(error);
    }
}