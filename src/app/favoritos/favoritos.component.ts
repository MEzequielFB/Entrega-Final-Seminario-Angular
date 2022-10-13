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

  constructor(private favoritos_service: FavoritosService) {
    this.titulo = "Favoritos";
    this.animes_favoritos = [];
  }

  ngOnInit(): void {
    this.favoritos_service.animes_favoritos.subscribe(animes_favoritos => {
      this.animes_favoritos = animes_favoritos;
    });
  }
}