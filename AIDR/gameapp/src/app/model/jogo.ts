export class Jogo{
    id?:number;
    nome:string;
    plataforma: string;
    genero: string;
    status = 'na'; 

    constructor(nome = '' ,genero = '', plataforma= ''){
        this.nome= nome;
        this.genero = genero;
        this.plataforma = plataforma;

    }
}
    