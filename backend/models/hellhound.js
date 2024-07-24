import { Schema, model } from 'mongoose';

const Hellhound = model('Hellhound', new Schema({
  name: { type: String, required: true },
  invisibility: { type: Boolean, required: true },
  hp: { type: Number, required: true }, // 0-100
  age: { type: Number, rquired: true },
  rarity: { type: String, required: true }, // Common, Rare, Epic, Legendary
  strength: { type: Number, required: true },  // 1-50
  weakness: { type: [String], required: true },
}));

export default Hellhound;