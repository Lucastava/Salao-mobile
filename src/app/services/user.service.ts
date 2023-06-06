import { Injectable, inject } from '@angular/core';
import { User } from '../model/user';
import { Firestore, collection, collectionData, addDoc, getDocs, doc, getDoc} from '@angular/fire/firestore';
import { DocumentData, Query, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  private userColection = collection(this.firestore, 'users');


  add(user: User) {
   return addDoc(this.userColection, <User>{

      email: user.email,
      nome: user.nome,
      senha: user.senha,
      telefone: user.telefone
    })

  }

   async list() {
      //return collectionData(query(this.userColection));
      const result = await getDocs(query(this.userColection));
      return result.docs.map(doc => ({_id: doc.id, ...doc.data() }));
      
    }

    async get(id:string){
      const result = await getDoc(doc(this.firestore,'users', id))
      return result.data()
      return{_id: result.id, ...result.data() }
    }

  }
