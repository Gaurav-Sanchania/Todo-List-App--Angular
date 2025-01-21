import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoListApp';

  todoList: object[] = [
    {id: 101, title: "Plan Weekly Goals", description: "Declutter and organize your desk or workspace to improve focus and productivity.", isMarked: false},
    {id: 102, title: "Exercise or Physical Activity", description: "Schedule at least 30 minutes for a workout, yoga session, or a brisk walk.", isMarked: false},
    {id: 103, title: "Organize Workspace", description: "Outline your key objectives for the week, breaking them into smaller, actionable steps.", isMarked: true},
    {id: 104, title: "Connect with Someone", description: "Reach out to a friend, family member, or colleague you haven’t spoken to in a while.", isMarked: false},
    {id: 105, title: "Learn Something New", description: "Spend 20-30 minutes reading, watching a tutorial, or practicing a new skill.", isMarked: false},
    {id: 106, title: "Create an App", description: "Develope UI for the app, create database and connect it to UI.", isMarked: true},
    {id: 107, title: "Electricity Bill", description: "Pay the electricity bill before due date", isMarked: true},
    {id: 108, title: "Meditate", description: "Practice mindfulness or meditation for at least 10 minutes to improve mental clarity.", isMarked: false},
    {id: 109, title: "Plan Meals", description: "Prepare a weekly meal plan to save time and eat healthier.", isMarked: false},
    {id: 110, title: "Review Finances", description: "Analyze your monthly expenses and savings to adjust your budget.", isMarked: true},
    {id: 111, title: "Declutter Inbox", description: "Clear out emails and organize your inbox for better productivity.", isMarked: false},
    {id: 112, title: "Read a Book", description: "Spend 30 minutes reading a chapter from your favorite or a new book.", isMarked: false},
    {id: 113, title: "Volunteer", description: "Dedicate some time to volunteer for a cause you care about.", isMarked: false},
    {id: 114, title: "Backup Files", description: "Ensure your important files are backed up to an external drive or cloud.", isMarked: true},
    {id: 115, title: "Practice Gratitude", description: "Write down three things you are grateful for to cultivate positivity.", isMarked: false},
    {id: 116, title: "Set Monthly Goals", description: "Outline your key targets for the month and plan actionable steps to achieve them.", isMarked: true},
    {id: 117, title: "Fix a Broken Item", description: "Repair or repurpose something you’ve been meaning to fix.", isMarked: false},
  ];

  // ngOnInit() {
  //   localStorage.setItem('todoList', JSON.stringify(this.todoList));
  // }
}
