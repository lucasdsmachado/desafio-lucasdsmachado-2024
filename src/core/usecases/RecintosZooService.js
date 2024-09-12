import { zooInitialData, animaisValidos } from '../../data/zooInitialData.js';

class RecintosZooService {
    static analisaRecintos(animalEspecie, quantidade) {
        const animal = animaisValidos[animalEspecie.toUpperCase()];
        if (!animal) {
            return { erro: "Animal inválido" };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        const recintosViaveis = zooInitialData
            .filter(r => this.podeAlocarAnimal(r, animal, quantidade))
            .map(r => `Recinto ${r.numero} (espaço livre: ${this.espacoRestanteParaAnimais(r, animal, quantidade)} total: ${r.espacoTotal})`);

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
        }

        return { recintosViaveis };
    }

    static podeAlocarAnimal(recinto, animal, quantidade) {
        const espacoNecessario = this.calcularEspacoNecessario(recinto, animal, quantidade);
        const espacoLivre = this.calcularEspacoLivre(recinto);

        return (
            this.biomaAdequado(recinto, animal) &&
            this.espacoSuficiente(espacoLivre, espacoNecessario) &&
            this.animaisCompativeis(recinto, animal) &&
            this.macacosConfortaveis(recinto, animal, quantidade)
        );
    }

    static calcularEspacoNecessario(recinto, animal, quantidade) {
        const espacoExtra = recinto.animais.some(a => a.especie !== animal.especie) ? 1 : 0;
        return (animal.tamanho * quantidade) + espacoExtra;
    }

    static calcularEspacoLivre(recinto) {
        return recinto.espacoTotal - recinto.animais.reduce((acc, a) => acc + a.tamanho, 0);
    }

    static biomaAdequado(recinto, animal) {
        return recinto.bioma.some(b => animal.bioma.includes(b));
    }

    static espacoSuficiente(espacoLivre, espacoNecessario) {
        return espacoLivre >= espacoNecessario;
    }

    static isCarnivoro(animal) {
        return ['LEAO', 'LEOPARDO', 'CROCODILO'].includes(animal.especie);
    }

    static animaisCompativeis(recinto, animal) {
        if (animal.especie === 'HIPOPOTAMO') {
            return this.hipopotamosCompativeis(recinto);
        }

        return this.isCarnivoro(animal)
            ? recinto.animais.every(a => a.especie === animal.especie)
            : !recinto.animais.some(a => this.isCarnivoro(a));
    }

    static hipopotamosCompativeis(recinto) {
        const outrasEspecies = recinto.animais.some(a => a.especie !== 'HIPOPOTAMO');

        if (recinto.bioma.includes('Savana') && recinto.bioma.includes('Rio')) {
            return true;
        }

        return !outrasEspecies;
    }

    static macacosConfortaveis(recinto, animal, quantidade) {
        if (animal.especie === 'MACACO') {
            return !(recinto.animais.length === 0 && quantidade === 1);
        }
        return true;
    }

    static espacoRestanteParaAnimais(recinto, animal, quantidade) {
        const espacoOcupado = recinto.animais.reduce((acc, a) => acc + a.tamanho, 0) + this.calcularEspacoNecessario(recinto, animal, quantidade);
        return recinto.espacoTotal - espacoOcupado;
    }
}

export { RecintosZooService };