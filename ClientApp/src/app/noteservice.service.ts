import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  addLogs: Subject<any>;
  constructor() {
    this.addLogs=new Subject<any>;
   }
   
  notes = [{"id":1,"title":"test","message":"given"},{"id": 2,"title":"none","message":"notgiven"},{"id":3,"title":"hello","message":"will not be given"},{"id":4,"title":"Welcome","message":"will never be given"}]
  getnotes(){
   return this.notes;
  }
  getnotesbyid(noteid:any){
  let obj = this.notes.find(x=> x.id == noteid);
  return obj;
  }
  deletenotes(id:number){
   const i= this.notes.findIndex(e => e.id === id);
   if(i !== -1){
      this.notes.splice(i,1);
   }
   console.log(this.notes);
  }
  
}
