import { Router } from 'express';
import { getHellhounds, getHellhound, postHellhound, patchHellhound, putHellhound, deleteHellhound, } from '../Controllers/HellhoundController';

const router = Router();

router.get('/', getHellhounds);
router.get('/:id', getHellhound);
router.post('/', postHellhound);
router.patch('/:id', patchHellhound);
router.put('/:id', putHellhound);
router.delete('/:id', deleteHellhound);

export default router;