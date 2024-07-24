import Hellhound from '../../DB/models/Hellhound.js';
import Repository from '../../DB/Repository';
import { apply_patch } from 'jsonpatch';
import { Request, Response } from 'express';

const HellhoundRepository = new Repository(Hellhound);

const handleNotFound = (res: Response) => res.status(404).send('Hellhound not found!');
const handleInternalServerError = (res: Response, error: any) => res.status(500).send(error.message);

export const getHellhounds = async (req: Request, res: Response) => {
    try {
        const hellhounds = await HellhoundRepository.getAllAsync();
        return res.status(200).send(hellhounds);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
}

export const getHellhound = async (req: Request, res: Response) => {
    try {
        const hellhound = await HellhoundRepository.getByIdAsync(req.params.id);
        if (!hellhound) {
            return handleNotFound(res);
        }
        return res.status(200).send(hellhound);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const postHellhound = async (req: Request, res: Response) => {
    try {
        const hellhound = HellhoundRepository.addAsync(req.body);
        return res.status(201).send(hellhound);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};


export const patchHellhound = async (req: Request, res: Response) => {
    const id = req.params.id;
    const operations = req.body;

    try {
        let hellhound = await HellhoundRepository.getByIdAsync(id);
        if (!hellhound) {
            return handleNotFound(res);
        }

        hellhound = apply_patch(hellhound.toObject(), operations);
        await HellhoundRepository.updateAsync(id, hellhound);
        return res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }

};

export const putHellhound = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await HellhoundRepository.updateAsync(id, req.body);
        return res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const deleteHellhound = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await HellhoundRepository.deleteAsync(id);
        res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};