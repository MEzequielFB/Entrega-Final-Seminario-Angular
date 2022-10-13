import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from './animes-lista/Anime';

const URL = "https://6346cd3d745bd0dbd386cc82.mockapi.io/api";

@Injectable({
  providedIn: 'root'
})
export class AnimeDataService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<Anime[]> {
    return this.http.get<Anime[]>(URL + "/animes");
  }
}