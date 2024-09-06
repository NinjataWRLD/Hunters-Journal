import { Schema, model } from 'mongoose';

interface IHuman {
  image: string;
  name: string;
  woman: boolean;
  hp: number;
  damage: number;
  rarity: string;
  strength: string;
  weakness: string;
  won: number;
}

const humanSchema = new Schema<IHuman>({
  image: { type: String },
  name: { type: String, required: true },
  woman: { type: Boolean, required: true }, 
  hp: { type: Number, required: true }, // 0-100
  damage: { type: Number, required: true }, //0-10000
  rarity: { type: String, required: true }, // Common, Rare, Epic, Legendary
  strength: { type: String, required: true },
  weakness: { type: String, required: true },
  won: { type: Number, required: true },
});

const Human = model<IHuman>('Human', humanSchema);

export default Human;