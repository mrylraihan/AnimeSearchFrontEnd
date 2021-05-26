import { Anime } from './../../shared/Anime';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable()

export class HeadQuartersService{
    constructor(private http:HttpClient){}
    
    getAnimeUrl= "http://localhost:1111/animeAPI/name";

    getAnime(): Observable<Anime[]>{
        return this.http.get<Anime[]>(this.getAnimeUrl);
    }
}