import { Recinto } from "../core/entities/Recinto.js";
import { Animal } from "../core/entities/Animal.js";

const animaisValidos = {
  'LEAO': new Animal('LEAO', 3, ['Savana']),
  'LEOPARDO': new Animal('LEOPARDO', 2, ['Savana']),
  'CROCODILO': new Animal('CROCODILO', 3, ['Rio']),
  'MACACO': new Animal('MACACO', 1, ['Savana', 'Floresta']),
  'GAZELA': new Animal('GAZELA', 2, ['Savana']),
  'HIPOPOTAMO': new Animal('HIPOPOTAMO', 4, ['Savana', 'Rio'])
};

const zooInitialData = [
  new Recinto(1, ['Savana'], 10, [animaisValidos['MACACO'], animaisValidos['MACACO'], animaisValidos['MACACO']]),
  new Recinto(2, ['Floresta'], 5, []),
  new Recinto(3, ['Savana', 'Rio'], 7, [animaisValidos['GAZELA']]),
  new Recinto(4, ['Rio'], 8, []),
  new Recinto(5, ['Savana'], 9, [animaisValidos['LEAO']])
];

export { zooInitialData, animaisValidos };
