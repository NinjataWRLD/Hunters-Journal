import axios from './axios';

export const Fighters = async () => await axios.get('/api/fight');