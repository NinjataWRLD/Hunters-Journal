import { Schema, model } from 'mongoose';

interface IHellhound {
  image: string;
  name: string;
  invisibility: boolean;
  hp: number;
  age: number;
  rarity: string;
  strengths: string[];
  weakness: string[];
}

const hellhoundSchema = new Schema<IHellhound>({
  image: { type: String },
  name: { type: String, required: true },
  invisibility: { type: Boolean, required: true },
  hp: { type: Number, required: true }, // 0-100
  age: { type: Number, required: true },
  rarity: { type: String, required: true }, // Common, Rare, Epic, Legendary
  strengths: { type: [String], required: true },  // 1-50
  weakness: { type: [String], required: true },
});

const Hellhound = model<IHellhound>('Hellhound', hellhoundSchema);

export default Hellhound;