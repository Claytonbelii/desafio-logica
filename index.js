// Definição da classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe a mensagem de ataque conforme o tipo de herói
    atacar() {
        let ataque;
        // Estrutura de decisão para determinar o ataque com base no tipo de herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'realizou um ataque desconhecido';
        }

        // Exibição da mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criação de instâncias da classe Heroi
const heroi1 = new Heroi('Aragorn', 87, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 2019, 'mago');
const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
const heroi4 = new Heroi('Naruto', 16, 'ninja');

// Chamada do método atacar para cada herói
heroi1.atacar(); // O guerreiro atacou usando espada
heroi2.atacar(); // O mago atacou usando magia
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
