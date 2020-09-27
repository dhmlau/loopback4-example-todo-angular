import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Todo} from '../api/models/todo';
import {TodoControllerService} from '../api/services/todo-controller.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Todo[];
  // todos: Todo[] = [
  //   {
  //   id: 1,
  //   title: 'todo 1',
  //   desc: 'description 1'
  //   },
  //   {
  //     id: 2,
  //     title: 'test2',
  //     desc: 'description test 2'
  //   },
  //   {
  //     id: 3,
  //     title: 'test3 title',
  //     desc: 'description test 3'
  //   },
  // ];

  constructor(private todoService: TodoControllerService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.findTodos().subscribe(todos => this.todos = todos);
  }

}
