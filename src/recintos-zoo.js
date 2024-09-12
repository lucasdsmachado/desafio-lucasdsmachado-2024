import { RecintosZooService } from "./core/usecases/RecintosZooService.js";

class RecintosZoo {
    analisaRecintos(animal, quantidade) {
        return RecintosZooService.analisaRecintos(animal, quantidade);
    }
}

export { RecintosZoo as RecintosZoo };
