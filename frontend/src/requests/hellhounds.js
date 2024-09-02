import axios from './axios';

export const GetAllHellhounds = async () => await axios.get('/api/hellhounds');
export const GetHellhound = async (id) => await axios.get(`/api/hellhounds/${id}`);
export const CreateHellhound = async (dto) => await axios.post('/api/hellhounds', dto);
export const EditHellhound = async (id, dto) => await axios.put(`/api/hellhounds/${id}`, dto);
export const DeleteHellhound = async (id) => await axios.delete(`/api/hellhounds/${id}`);