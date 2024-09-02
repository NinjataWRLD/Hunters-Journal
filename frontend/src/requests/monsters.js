import axios from './axios';

export const GetAllMonsters = async () => await axios.get('/monsters/Monsters');
export const GetMonster = async (id) => await axios.get(`/api/monsters/${id}`);
export const CreateMonster = async (dto) => await axios.post('/api/monsters', dto);
export const EditMonster = async (id, dto) => await axios.put(`/api/Monsters/${monsters}`, dto);
export const DeleteMonster = async (id) => await axios.delete(`/api/monsters/${id}`);