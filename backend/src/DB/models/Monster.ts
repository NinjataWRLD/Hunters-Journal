import { Schema, model } from 'mongoose';

interface IMonster {
  image: string;
  name: string;
  invisibility: boolean;
  hp: number;
  age: number;
  rarity: string;
  strength: string;
  weakness: string;
}

const monsterSchema = new Schema<IMonster>({
  image: { type: String },
  name: { type: String, required: true },
  invisibility: { type: Boolean, required: true }, //true, false
  hp: { type: Number, required: true }, // 0-100
  age: { type: Number, required: true }, //0-10000
  rarity: { type: String, required: true }, // Common, Rare, Epic, Legendary
  strength: { type: String, required: true },
  weakness: { type: String, required: true },
});

const Monster = model<IMonster>('Monster', monsterSchema);

export default Monster;