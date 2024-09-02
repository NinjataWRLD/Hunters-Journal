import { Router } from 'express';
import { getHumans, getHuman, postHuman, patchHuman, putHuman, deleteHuman, } from '../Controllers/HumanController.js';

const router = Router();

router.get('/', getHumans);
router.get('/:id', getHuman);
router.post('/', postHuman);
router.patch('/:id', patchHuman);
router.put('/:id', putHuman);
router.delete('/:id', deleteHuman);

export default router;