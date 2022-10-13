import { Component, OnInit } from '@angular/core';
import { AnimeDataService } from '../anime-data.service';
import { Anime } from './Anime';

@Component({
  selector: 'app-animes-lista',
  templateUrl: './animes-lista.component.html',
  styleUrls: ['./animes-lista.component.scss']
})
export class AnimesListaComponent implements OnInit {

  titulo: String;
  animes: Anime[];

  constructor(private anime_data_service: AnimeDataService) {

    this.titulo = "Lista de animes";
    this.animes= [];
  }

  ngOnInit(): void {
    this.anime_data_service.getAllData().subscribe(animes => this.animes = animes);
  }

  /* setearFavorito(anime: Anime) {
    if (anime.favorito) {
      anime.favorito = false;
    } else {
      anime.favorito = true;
    }
  } */
}