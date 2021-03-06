import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent  {

 city:string;
 constructor(private http: HttpClient){}
 process(){
   let url = "http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid=138b91f7502c917df454a94449df5c18"
   this.http.get(url).subscribe(response =>{
     alert(JSON.stringify(response));
   })
 }
}
