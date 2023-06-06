import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-enter',
  templateUrl: './produto-enter.page.html',
  styleUrls: ['./produto-enter.page.scss'],
})
export class ProdutoEnterPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  produto = new produto;

  id: string = "";
nome: String ="";
descricao : string = "";
quant: number = 0 ;
valor: number = 0 ;
fotos: string = "";
ativo: boolean= true ;

}
