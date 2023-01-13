import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteserviceService } from '../noteservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  employeeservice: any;
  constructor(private noteserviceService: NoteserviceService,private router: Router) { 
 
  }
  ngOnInit(): void {
    this.notes = this.noteserviceService.getnotes();
  }
   deletenotes(id:any){
     this.noteserviceService.deletenotes(id);
 }
  
 getedit(noteid:any){
   
  this.router.navigate(['/create/',noteid]); 
 }
  search = ''
  notes:any=[]
  filterednotes:any;
  filternotes(){
    
    console.log(this.notes)
    // console.log(this.notes.filter(p => p.title==this.search))
    // return this.notes.splice(p => p.title==abc);
    // this.filterednotes=this.notes.filter(p => p.title==this.search)
  }
  
}