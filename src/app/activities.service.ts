import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private readonly firebaseDocumentName = 'activities'

  constructor(private firestore: AngularFirestore) { }

  saveCertification(certification){
    if(certification.id){
      return this.firestore.doc(this.firebaseDocumentName + '/' + certification.id).update(certification);  
    }
    return this.firestore.collection(this.firebaseDocumentName).add(certification);
  }

  getCertifications(){
    return this.firestore.collection(this.firebaseDocumentName, , ref => ref.where('value', '==', 'training'))
      .snapshotChanges()
      .pipe(
        map(certifications => certifications.map(this.mapCertification))
      )
  }

  getTrainings(){
    return this.firestore.collection(this.firebaseDocumentName, ref => ref.where('value', '==', 'training'))
      .snapshotChanges()
      .pipe(
        map(certifications => certifications.map(this.mapCertification))
      )
  }

  getVideoLessons(){
    return this.firestore.collection(this.firebaseDocumentName, ref => ref.where('value', '==', 'video'))
      .snapshotChanges()
      .pipe(
        map(certifications => certifications.map(this.mapCertification))
      )
  }

  private mapCertification(certification){
    console.log("q");
    certification = certification.payload.doc || certification.payload;
    return {
      ...certification.data(),
      id: certification.id
    };
  }
}
