import { v4 as uuid } from 'uuid';
export class Produto {
    _id!: string;
	nome!: string;
    categoria!: string;
    descricao!: string;
    quant!: number;
    valor!: number;
ativo:boolean = true;

    add() {
        console.log("SALVO!");
    }
}