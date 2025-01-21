import { Routes } from '@angular/router';
import { DisplayComponent } from './displayList/display/display.component';
import { AddComponent } from './addTodo/add/add.component';
import { EditComponent } from './editTodo/edit/edit.component';

export const routes: Routes = [
    { path: 'display', component: DisplayComponent},
    { path: 'add', component: AddComponent},
    { path: 'edit/:id', component: EditComponent},
];
