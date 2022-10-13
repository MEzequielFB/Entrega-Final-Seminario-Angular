import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Anime } from './animes-lista/Anime';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private _animes_favoritos: Anime[];
  private _animesSubject: BehaviorSubject<Anime[]>;
  /* animes_favoritos: Anime[]; */
  public animes_favoritos: Observable<Anime[]>;

  constructor() {
    this._animes_favoritos = [];
    this._animesSubject = new BehaviorSubject(this._animes_favoritos);
    /* this.animes_favoritos = []; */
    this.animes_favoritos = this._animesSubject.asObservable();
  }

  /* getFavoritos() {
    return this.animes_favoritos;
  } */

  /* getCantidadFavoritos() {
    return this.animes_favoritos.length;
  } */

  /* gestionarFavoritos(animeParam: Anime) {

    let enFavoritos = this.animes_favoritos.find(anime => animeParam == anime);
    if (enFavoritos) {

      let nuevo_array = this.animes_favoritos.filter(anime => animeParam != anime);
      this.animes_favoritos = nuevo_array;
    } else {
      this.animes_favoritos.push(animeParam);
    }
  } */
  gestionarFavoritos(animeParam: Anime): void {

    let enFavoritos = this._animes_favoritos.find(anime => anime == animeParam);
    if (enFavoritos) {

      let nuevo_array = this._animes_favoritos.filter(anime => animeParam != anime);
      this._animes_favoritos = nuevo_array;
    } else {
      this._animes_favoritos.push(animeParam);
    }
    this._animesSubject.next(this._animes_favoritos);
  }
}