import Monster from '../../DB/models/Monster.js';
import Repository from '../../DB/Repository.js';
import { apply_patch } from 'jsonpatch';
import { Request, Response } from 'express';

const MonsterRepository = new Repository(Monster);

const handleNotFound = (res: Response) => res.status(404).send('Monster not found!');
const handleInternalServerError = (res: Response, error: any) => res.status(500).send(error.message);

export const getMonsters = async (req: Request, res: Response) => {
    try {
        const monsters = await MonsterRepository.getAllAsync();
        
        return res.status(200).send(monsters);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const getMonster = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const monster = await MonsterRepository.getByIdAsync(id);
        if (!monster) {
            return handleNotFound(res);
        }

        return res.status(200).send(monster);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const postMonster = async (req: Request, res: Response) => {
    try {
        const { name, invisibility, hp, damage, rarity, strength, weakness, image } = req.body;
        const dto = { name, invisibility, hp, damage, rarity, strength, weakness, image, won: 0 };
        const monster = MonsterRepository.addAsync(dto);

        return res.status(201).send(monster);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};


export const patchMonster = async (req: Request, res: Response) => {
    const { params: { id }, body: operations } = req;

    try {
        let monster = await MonsterRepository.getByIdAsync(id);
        if (!monster) {
            return handleNotFound(res);
        }

        monster = apply_patch(monster.toObject(), operations);
        await MonsterRepository.updateAsync(id, monster);

        return res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }

};

export const putMonster = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await MonsterRepository.updateAsync(id, req.body);

        return res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const deleteMonster = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await MonsterRepository.deleteAsync(id);

        res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};
