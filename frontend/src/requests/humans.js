import axios from './axios';

export const GetAllHumans = async () => await axios.get('/api/humans');
export const GetHuman = async (id) => await axios.get(`/api/humans/${id}`);
export const CreateHuman = async (dto) => await axios.post('/api/humans', dto);
export const EditHuman = async (id, dto) => await axios.put(`/api/humans/${id}`, dto);
export const PatchHuman = async(id, operations) => await axios.patch(`/api/humans/${id}`, operations);
export const DeleteHuman = async (id) => await axios.delete(`/api/humans/${id}`);