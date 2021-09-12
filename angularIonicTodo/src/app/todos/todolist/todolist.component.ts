import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { Weather } from '../shared/weather.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {

  public disabled:boolean;
  public todolist: Todo[];
  public error:boolean;
  public todoDisabled;
  public weatherList : Weather[];
  public title = 'todolistComponent';

  isShowDiv = true;
  toggleDisplayDiv()
  {
    this.isShowDiv = !this.isShowDiv;
  }

  constructor(private geolocation: Geolocation,private todoService: TodoService) {
    this.weatherList = this.todoService.weatherList;
    this.retry();
   }

   retry(): void {
    this.todoService.get().subscribe(
      (todolist:Todo[])=> {
        this.error = false;
        this.todolist = todolist;
      },
      ()=>{
        this.error = true;
      }
    );
  }

  delete(todo: Todo){
    this.disabled=true;
    this.todoDisabled = todo;
    this.todoService.delete(todo).subscribe(
      ()=>{
        this.disabled = true;
      },
      ()=>{}
    );
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((geoposition:Geoposition)=>{
      this.todoService.getPosition(geoposition.coords.latitude, geoposition.coords.longitude);
    }).catch((error)=>{
      console.log("error getting location", error);
    });
  }
  }


