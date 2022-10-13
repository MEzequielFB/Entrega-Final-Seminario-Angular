import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-btn-favorito',
  templateUrl: './btn-favorito.component.html',
  styleUrls: ['./btn-favorito.component.scss']
})
export class BtnFavoritoComponent implements OnInit {

  @Input()
  favorito!: boolean;

  @Output()
  favoritoChange: EventEmitter<boolean>;

  @Output()
  favoritosSeteado: EventEmitter<String>;

  constructor() {
    this.favoritoChange = new EventEmitter<boolean>();
    this.favoritosSeteado = new EventEmitter<String>();
  }

  ngOnInit(): void {
  }

  setearFavorito(favorito: boolean): void {
    if (favorito) {
      favorito = false;
      this.favoritosSeteado.emit("Sacado de favoritos");
    } else {
      favorito = true;
      this.favoritosSeteado.emit("Agregado a favoritos");
    }
    this.favoritoChange.emit(this.favorito);
  }
}
