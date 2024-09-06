import { Schema, model } from 'mongoose';

interface IMonster {
  image: string;
  name: string;
  invisibility: boolean;
  hp: number;
  damage: number;
  rarity: string;
  strength: string;
  weakness: string;
  won: number;
}

const monsterSchema = new Schema<IMonster>({
  image: { type: String },
  name: { type: String, required: true },
  invisibility: { type: Boolean, required: true }, //true, false
  hp: { type: Number, required: true }, // 0-100
  damage: { type: Number, required: true }, //0-10000
  rarity: { type: String, required: true }, // Common, Rare, Epic, Legendary
  strength: { type: String, required: true },
  weakness: { type: String, required: true },
  won: { type: Number, required: true },
});

const Monster = model<IMonster>('Monster', monsterSchema);

export default Monster;