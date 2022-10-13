import { Component, OnInit } from '@angular/core';
import { AnimeDataService } from '../anime-data.service';
import { FavoritosService } from '../favoritos.service';
import { Anime } from './Anime';

@Component({
  selector: 'app-animes-lista',
  templateUrl: './animes-lista.component.html',
  styleUrls: ['./animes-lista.component.scss']
})
export class AnimesListaComponent implements OnInit {

  titulo: String;
  animes: Anime[];

  constructor(private anime_data_service: AnimeDataService, private favoritos_service: FavoritosService) {

    this.titulo = "Lista de animes";
    this.animes= [];
  }

  ngOnInit(): void {
    this.anime_data_service.getAllData().subscribe(animes => this.animes = animes);
  }

  gestionarFavoritos(anime: Anime): void {
    this.favoritos_service.gestionarFavoritos(anime);
  }
  /* setearFavorito(anime: Anime) {
    if (anime.favorito) {
      anime.favorito = false;
    } else {
      anime.favorito = true;
    }
  } */
}