import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-enter',
  templateUrl: './user-enter.page.html',
  styleUrls: ['./user-enter.page.scss'],
})
export class UserEnterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

nome: String ="";
email:String = "";
senha: String = "";
telefone:String = "";
save(){

}

}
