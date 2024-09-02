import { Router } from 'express';
import { getMonsters, getMonster, postMonster, patchMonster, putMonster, deleteMonster, } from '../Controllers/MonsterController.js';

const router = Router();

router.get('/', getMonsters);
router.get('/:id', getMonster);
router.post('/', postMonster);
router.patch('/:id', patchMonster);
router.put('/:id', putMonster);
router.delete('/:id', deleteMonster);

export default router;