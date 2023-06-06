import { Component } from '@angular/core';
import { User } from '../model/user';
import { AlertController } from '@ionic/angular';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private alertController: AlertController
    //private: userService:UserService
  ) { }
 produto = new Produto()
 produtoService = new ProdutoService();

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present; { }
  };



  Save() {
    this.produtoService.add(this.produto);
    this.presentAlert("aviso", "cadrasto");
    //console.log(this.user);

  }

}
