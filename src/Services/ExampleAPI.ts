import axios from 'axios';
import Prod from './../models/Prod';
import Usu from './../models/Usu';

export  async function Logar(login: string, password: string): Promise<any> {
    try {
        const response = await axios.post('https://example-ecommerce.herokuapp.com/user/login', { login, password });
        return response.data;
    } catch (error) {
        console.error('Erro de autenticação:');
        console.error(error);
        return null;
    }
}

export async function getProd() {
    try {
        const response = await axios.get('https://example-ecommerce.herokuapp.com/product/list');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function cadUsu(usuario: Usu): Promise<any> {
    try {
        console.log(usuario.name)
        const response = await axios.post('https://example-ecommerce.herokuapp.com/user/customer/add', usuario);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
