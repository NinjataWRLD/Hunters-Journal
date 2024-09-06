import Human from '../../DB/models/Human.js';
import Repository from '../../DB/Repository.js';
import { apply_patch } from 'jsonpatch';
import { Request, Response } from 'express';

const HumanRepository = new Repository(Human);

const handleNotFound = (res: Response) => res.status(404).send('Human not found!');
const handleInternalServerError = (res: Response, error: any) => res.status(500).send(error.message);

export const getHumans = async (req: Request, res: Response) => {
    try {
        const human = await HumanRepository.getAllAsync();
        
        return res.status(200).send(human);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const getHuman = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const human = await HumanRepository.getByIdAsync(id);
        if (!human) {
            return handleNotFound(res);
        }

        return res.status(200).send(human);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const postHuman = async (req: Request, res: Response) => {
    try {
        const { name, hp, damage, rarity, strength, weakness } = req.body;
        const dto = { name, hp, damage, rarity, strength, weakness };
        const human = HumanRepository.addAsync(dto);

        return res.status(201).send(human);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};


export const patchHuman = async (req: Request, res: Response) => {
    const { params: { id }, body: operations } = req;

    try {
        let human = await HumanRepository.getByIdAsync(id);
        if (!human) {
            return handleNotFound(res);
        }

        human = apply_patch(human.toObject(), operations);
        await HumanRepository.updateAsync(id, human);

        return res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }

};

export const putHuman = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await HumanRepository.updateAsync(id, req.body);

        return res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const deleteHuman = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await HumanRepository.deleteAsync(id);

        res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};
