import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  form: FormGroup;
  idPassed: string;
  editTask: any = [{
    id: 0,
    title: "",
    description: "",
    isMarked: false
  }];
  editList: any = [{
    id: 0,
    title: "",
    description: "",
    isMarked: false
  }];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.editList = JSON.parse(localStorage.getItem('todoList') || '[]');
    this.idPassed = this.route.snapshot.paramMap.get('id') || '';
    // console.log(this.editList.id);

    const getItem = this.editList.find((item: any) => item.id == this.idPassed);
    // console.log(getItem);

    this.form = new FormGroup({
      id: new FormControl(getItem.id),
      title: new FormControl(getItem.title, Validators['required']),
      description: new FormControl(getItem.description, Validators['required']),
      isMarked: new FormControl(getItem.isMarked, Validators['required'])
    });
    // debugger;
  }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log(this.form.value);
    const getIndex = this.editList.findIndex((item: any) => item.id == this.idPassed);
    this.editList[getIndex] = this.form.value;
    alert("Task has been edited!");

    localStorage.setItem("todoList", JSON.stringify(this.editList));
    this.router.navigate(['/display']);
  }
}
