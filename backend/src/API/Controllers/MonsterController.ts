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
}

export const getMonster = async (req: Request, res: Response) => {
    try {
        const monster = await MonsterRepository.getByIdAsync(req.params.id);
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
        const data = {
            name: req.body.name,
            invisibility: req.body.invisibility,
            hp: req.body.hp,
            age: req.body.age,
            rarity: req.body.rarity,
            strength: req.body.strength,
            weakness: req.body.weakness,
            image: req.body.image        
        };
        const monster = MonsterRepository.addAsync(data);
        return res.status(201).send(monster);
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};


export const patchMonster = async (req: Request, res: Response) => {
    const id = req.params.id;
    const operations = req.body;

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
        const id = req.params.id;
        await MonsterRepository.updateAsync(id, req.body);
        return res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};

export const deleteMonster = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await MonsterRepository.deleteAsync(id);
        res.status(204).send();
    } catch (e) {
        return handleInternalServerError(res, e);
    }
};