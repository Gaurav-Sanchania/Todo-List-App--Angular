import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  idCount: number;
  form: FormGroup;

  list: any = [{
    id: 0,
    title: "",
    description: "",
    isMarked: false
  }];

  constructor() {
    this.list = JSON.parse(localStorage.getItem('todoList') || '[]');
    // console.log("This is from add component", this.list);
    
    this.idCount = 101;
    for(let item of this.list){
      this.idCount++;
    }
    console.log(this.idCount);
    this.form = new FormGroup({
      id: new FormControl(this.idCount),
      title: new FormControl("", Validators['required']),
      description: new FormControl("", Validators['required']),
      isMarked: new FormControl(false, Validators['required'])
    });
  }

  
  ngOnInit() {
  }
  
  ngOnChanges() {
  }

  onSubmit() {
    this.list.push(this.form.value);
    // console.log(this.list);
    alert("Task has been added!");

    localStorage.setItem('todoList', JSON.stringify(this.list));
  }
}
 