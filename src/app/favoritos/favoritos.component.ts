import { Component, OnInit } from '@angular/core';
import { AnimeDataService } from '../anime-data.service';
import { Anime } from '../animes-lista/Anime';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  titulo: String;
  animes_favoritos: Anime[];
  cantidad: number;

  constructor(private favoritos_service: FavoritosService, private anime_data_service: AnimeDataService) {
    this.titulo = "Favoritos";
    this.animes_favoritos = [];
    this.cantidad = 0;
  }

  ngOnInit(): void {
    /* this.favoritos_service.animes_favoritos.subscribe(animes_favoritos => {
      this.animes_favoritos = animes_favoritos;
    }); */
    this.anime_data_service.getAllData().subscribe(animes_favoritos => {

      for (let anime of animes_favoritos) {
        if (anime.favorito) {
          this.animes_favoritos.push(anime);
        }
      }
      this.cantidad = this.animes_favoritos.length;
    });
    this.favoritos_service.cantidad.subscribe(cantidad => this.cantidad = cantidad);
  }

  gestionarFavoritos(anime: Anime, evento: any): void {
    this.favoritos_service.gestionarFavoritos(anime);
    this.anime_data_service.setFavorito(anime).subscribe(anime_service => anime = anime_service);
    console.log(evento);
  }
}