import { Injectable } from '@angular/core';

import  {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/'

import { SubCategory } from '../interface/subcategory'

import { Observable } from 'rxjs'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  
  private subcategoryCollection : AngularFirestoreCollection<SubCategory>;

  private subcategories : Observable<SubCategory[]>;

  constructor(db: AngularFirestore) {
    this.subcategoryCollection= db.collection<SubCategory>('subcategory')
    this.subcategories = this.subcategoryCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      }
    ))
   }

   getSubCategories () {
      return this.subcategories
   }

   getSubcategorie (id) {
    return this.subcategoryCollection.doc<SubCategory>(id).valueChanges()
   }
 



}
