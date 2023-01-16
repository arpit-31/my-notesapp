import { Component, OnInit } from '@angular/core';
import { FormControl ,  FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteserviceService } from '../noteservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private fb: FormBuilder,private noteserviceService: NoteserviceService,private route: ActivatedRoute,private router: Router) { }
  noteid : any;
  forms : any;
  Isupdate:any;
  ngOnInit(): void {  

    this.noteid= this.route.snapshot.params['noteid'];
    this.getnotesDetailById();
  } 
  getnotesDetailById() {
    this.forms = this.noteserviceService.getnotesbyid(this.noteid);
    console.log(this.forms)
    if(this.forms !=undefined){
      this.Isupdate=true;
      this.notesForm.patchValue({
        title: this.forms.title,
        message: this.forms.message
      });
    }
    else{
      this.Isupdate=false;
    }
  }

   
 onSubmit(){ 
  console.log(this.notesForm.value)
  if (this.Isupdate==false){
    this.noteserviceService.addnotes(this.notesForm.value).subscribe(result => {
      console.log(result);
      this.router.navigate(['home'])
    }); 
  }
  else{
    this.noteserviceService.editnotes(this.notesForm.value,this.noteid).subscribe(result => {
      console.log(result);
      this.router.navigate(['home'])
    }); 
  }
  
 }
  get title(){
    return this.notesForm.get('title')
  }
  get message(){
    return this.notesForm.get('message')
  }
  get f()
{
    return this.notesForm.controls;
}
  notesForm = this.fb.group({
    title: (['', [Validators.required,Validators.maxLength(20)]]),
    message:(['', [Validators.required,Validators.maxLength(50)]]),
    
  });
 
}
