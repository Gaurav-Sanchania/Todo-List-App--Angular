import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [NgClass, FormsModule, RouterOutlet],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  trBgColor: string = 'bg-success';

  displayList: any = [{
    id: 0,
    title: "",
    description: "",
    isMarked: false
  }];

  constructor(private router: Router) {
  }
  
  ngOnInit() {
    this.displayList = JSON.parse(localStorage.getItem('todoList') || '[]');
    // console.log(this.displayList);
  }

  onDelete(id: number) {
    console.log(id);

    this.displayList = this.displayList.filter((item: any) => item.id !== id);
    console.log(this.displayList);

    localStorage.setItem('todoList', JSON.stringify(this.displayList));
  }

  onCheck(id: number) {
    const item = this.displayList.find((obj: any) => obj.id == id);
    // console.log(item);
    if(item) {
      item.isMarked = !item.isMarked
    }

    localStorage.setItem('todoList', JSON.stringify(this.displayList));
  }

  navigateEdit(id: number) {
    // data transfer through url
    // transfer id from display compo - edit compo

    this.router.navigate(['/edit', id]);
  }
}
