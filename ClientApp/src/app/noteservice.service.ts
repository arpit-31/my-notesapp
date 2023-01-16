import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  addLogs: Subject<any>;
  constructor(private http:HttpClient) {
    this.addLogs=new Subject<any>;
  
   }
   
  notes = [{"id":1,"title":"test","message":"given"},{"id": 2,"title":"none","message":"notgiven"},{"id":3,"title":"hello","message":"will not be given"},{"id":4,"title":"Welcome","message":"will never be given"}]
  getnotes(){
  //  return this.notes;
   return this.http.get("https://localhost:44334/api/Notes")

  }

  setnotes(notes:any){
    //  return this.notes;
     this.notes=notes;
    }
  getnotesbyid(noteid:any){
    console.log(this.notes);
  let obj = this.notes.find(x=> x.id == noteid);
  return obj;
  }
  deletenotes(id:any){
  //  const i= this.notes.findIndex(e => e.id === id);
  //  if(i !== -1){
  //     this.notes.splice(i,1);
  //  }
  //  console.log(this.notes);
  return this.http.delete("https://localhost:44334/api/Notes/"+id);
  }
  addnotes(notes : any){
  return this.http.post("https://localhost:44334/api/Notes/",notes);
}
editnotes(notes : any,id : any){
  return this.http.put("https://localhost:44334/api/Notes/"+id ,notes)
}
  
}
