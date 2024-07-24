import { apply_patch } from 'jsonpatch'
import { Router } from 'express'
import Hellhound from '../models/hellhound.js'

const router = Router();

router.get('/', async (req, res) => {
    try {
        const hellhounds = await Hellhound.find();
        res.status(200).send(hellhounds);
    } catch (e) {
        res.status(500).send(e.message);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const hellhound = await Hellhound.findById(req.params.id);
        res.status(200).send(hellhound);
    } catch (e) {
        res.status(500).send(e.message);
    }
});


router.post('/', async (req, res) => {
    try {
        const hellhound = new Hellhound(req.body);
        await hellhound.save();
        res.status(201).send(hellhound);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const operations = req.body;

    try {
        let hellhound = await Hellhound.findById(id);
        if (!hellhound) {
            res.status(404).send('Hellhound not found!');
        }

        hellhound = apply_patch(hellhound.toObject(), operations);
        await Hellhound.findByIdAndUpdate(id, hellhound, { new: true });
        res.status(204).send();
    } catch (e) {
        res.status(500).send(e.message);
    }

});

router.put('/:id', async (req, res) => {
    try {
        await Hellhound.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Hellhound.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (e) {
        res.status(500).send(e.message);
    }
});

export default router;  