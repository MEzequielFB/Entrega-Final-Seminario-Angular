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

  private _cantidad: number;
  private _cantidadSubject: BehaviorSubject<number>;
  public cantidad: Observable<number>;

  constructor() {
    this._animes_favoritos = [];
    this._animesSubject = new BehaviorSubject(this._animes_favoritos);
    /* this.animes_favoritos = []; */
    this.animes_favoritos = this._animesSubject.asObservable();

    this._cantidad = 0;
    this._cantidadSubject = new BehaviorSubject(this._cantidad);
    this.cantidad = this._cantidadSubject.asObservable();
  }

  gestionarFavoritos(animeParam: Anime): void {

    let enFavoritos = this._animes_favoritos.find(anime => anime == animeParam);
    if (enFavoritos) {

      let nuevo_array = this._animes_favoritos.filter(anime => animeParam != anime);
      this._animes_favoritos = nuevo_array;
      this._cantidad--;
    } else {
      this._animes_favoritos.push(animeParam);
      this._cantidad++;
    }
    this._animesSubject.next(this._animes_favoritos);
    this._cantidadSubject.next(this._cantidad);
  }
}