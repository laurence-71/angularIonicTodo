import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap} from 'rxjs/operators';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todolist: Todo[];
  constructor(private http:HttpClient) { }

  get():Observable<Todo[]>{
    const options = {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.key,
      })
    };
    return this.http.get<Todo[]>(environment.jsonbin.url, options).pipe(
      tap(
        (todolist: Todo[])=>{
          this.todolist = todolist;
        },
        ()=>{}
      )
    );
  }

  post(todo: Todo){
    const tab = [];
    this.todolist.forEach(item =>{
      tab.push(item);
    });
    tab.push(todo);
    return this.put(tab).pipe(
      tap(
        ()=>{
          this.todolist.push(todo);
        },
        ()=>{
          console.log("recommencer");
        }
      )
    );
  }

  delete(todo: Todo){
    const tab = [];
    this.todolist.forEach(item=>{
      if(item !=todo){
        tab.push(item);
      }
    });
    return this.put(tab).pipe(
      tap(
        ()=>{
          const index = this.todolist.indexOf(todo);
          this.todolist.splice(index, 1);
        },
        ()=>{}
      )
    );
  }
  
  put(todoList: Todo[]): Observable<Todo[]> {
    return this.http.put<Todo[]>(environment.jsonbin.url,todoList,
      {
        headers: new HttpHeaders({
          "secret-key": environment.jsonbin.key,
          "Content-Type":"application/json",
          "versioning":"false"
        })
      })
    }

    public weatherList : Weather[]=[];
    getPosition(lat : number, lon: number){
      this.http.get(environment.api.url + "lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + environment.api.key)
      .subscribe((positionData: any) => {
        const weather = new Weather;
  
        weather.place = positionData.name;
        weather.temperature = positionData.main.temp;
        weather.minTemp=positionData.main.temp_min;
        weather.maxTemp=positionData.main.temp_max;
        weather.feelTemp=positionData.main.feels_like;
        weather.forcast = positionData.weather[0].description;
        weather.main = positionData.weather[0].main;
        weather.latitude = positionData.coord.lat;
        weather.longitude = positionData.coord.lon;
        weather.wind = positionData.wind.speed;
        weather.sunrise=positionData.sys.sunrise;
        weather.sunset =positionData.sys.sunset;
  
  
  weather.sunrise = new Date(positionData.sys.sunrise * 1000);
  weather.sunset = new Date(positionData.sys.sunset * 1000);        
  weather.time = new Date();
  this.weatherList.unshift(weather);
    },
    ()=>{},
    )}


}
