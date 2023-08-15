import { cantadas } from '../db/cantadas.js';

export function generateRandomSeduce() {
  const randomElement = cantadas[Math.floor(Math.random() * cantadas.length)];
  return randomElement;
}
