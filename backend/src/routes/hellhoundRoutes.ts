import { apply_patch } from 'jsonpatch'
import { Router, Response } from 'express'
import Hellhound from '../models/hellhound.js'

const router = Router();
const handleHttp500 = (res: Response, e: Error) => res.status(500).send(e.message);
const handleHttp404 = (res: Response) => res.status(404).send('Hellhound not found!');

router.get('/', async (req, res) => {
    try {
        const hellhounds = await Hellhound.find();
        res.status(200).send(hellhounds);
    } catch (e) {
        handleHttp500(res, e as Error);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const hellhound = await Hellhound.findById(req.params.id);
        if  (!hellhound) {
            return handleHttp404(res);
        }

        res.status(200).send(hellhound);
    } catch (e) {
        handleHttp500(res, e as Error);
    }
});


router.post('/', async (req, res) => {
    try {
        const hellhound = new Hellhound(req.body);
        await hellhound.save();
        res.status(201).send(hellhound);
    } catch (e) {
        handleHttp500(res, e as Error);
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const operations = req.body;

    try {
        let hellhound = await Hellhound.findById(id);
        if (!hellhound) {
            return handleHttp404(res);
        }

        hellhound = apply_patch(hellhound.toObject(), operations);
        await Hellhound.findByIdAndUpdate(id, hellhound, { new: true });
        res.status(204).send();
    } catch (e) {
        handleHttp500(res, e as Error);
    }

});

router.put('/:id', async (req, res) => {
    try {
        await Hellhound.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(204).send();
    } catch (e) {
        handleHttp500(res, e as Error);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Hellhound.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (e) {
        handleHttp500(res, e as Error);
    }
});

export default router;  