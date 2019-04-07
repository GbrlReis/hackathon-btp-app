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
    return this.firestore.collection(this.firebaseDocumentName, ref => ref.where('category', '==', 'certification'))
      .snapshotChanges()
      .pipe(
        map(certifications => certifications.map(this.mapActivity).sort((a, b) => a.index - b.index))
      )
  }

  getTrainings(){
    return this.firestore.collection(this.firebaseDocumentName, ref => ref.where('category', '==', 'training'))
      .snapshotChanges()
      .pipe(
        map(certifications => certifications.map(this.mapActivity).sort((a, b) => a.index - b.index))
      )
  }

  getVideoLessons(){
    return this.firestore.collection(this.firebaseDocumentName, ref => ref.where('category', '==', 'video'))
      .snapshotChanges()
      .pipe(
        map(certifications => certifications.map(this.mapActivity).sort((a, b) => a.index - b.index))
      )
  }

  private mapActivity(activity){
    activity = activity.payload.doc || activity.payload;
    return {
      ...activity.data(),
      id: activity.id
    };
  }
}
