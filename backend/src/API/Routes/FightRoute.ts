import { Router, Request, Response } from 'express';
import Human from '../../DB/models/Human.js';
import Monster from '../../DB/models/Monster.js';
import Repository from '../../DB/Repository.js';

const HumanRepository = new Repository(Human);
const MonsterRepository = new Repository(Monster);

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const humans = await HumanRepository.getAllAsync();
        const monsters = await MonsterRepository.getAllAsync();

        const randomHuman = humans[Math.floor(Math.random() * humans.length)];
        const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];

        return res.status(200).send({ human: randomHuman, monster: randomMonster });
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
});

export default router;