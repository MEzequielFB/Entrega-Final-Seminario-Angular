import { Component, OnInit } from '@angular/core';
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

  constructor(private favoritos_service: FavoritosService) {
    this.titulo = "Favoritos";
    this.animes_favoritos = [];
    this.cantidad = 0;
  }

  ngOnInit(): void {
    this.favoritos_service.animes_favoritos.subscribe(animes_favoritos => {
      this.animes_favoritos = animes_favoritos;
    });
    this.favoritos_service.cantidad.subscribe(cantidad => this.cantidad = cantidad);
  }

  gestionarFavoritos(anime: Anime, evento: any): void {
    this.favoritos_service.gestionarFavoritos(anime);
    console.log(evento);
  }
}