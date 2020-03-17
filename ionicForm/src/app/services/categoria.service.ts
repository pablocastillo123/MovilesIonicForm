import { Injectable } from '@angular/core';

import  {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/'

import { Categoria } from '../interface/categoria'

import { Observable } from 'rxjs'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoryCollection : AngularFirestoreCollection<Categoria>;

  private categories : Observable<Categoria[]>;

  constructor(db: AngularFirestore , datos : AngularFirestore) {
    this.categoryCollection= db.collection<Categoria>('category')
    this.categories = this.categoryCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      }
    ))
   }

    getCategories() {
    return this.categories
   }

    updateCategory (form: Categoria , id: string) {
    return this.categoryCollection.doc<Categoria>(id).update(form)
   }

  addCategory (input: Categoria) {
    return this.categoryCollection.add(input) 
  }

  removeCategory (id: string) {
    return this.categoryCollection.doc(id).delete()
  }

}
