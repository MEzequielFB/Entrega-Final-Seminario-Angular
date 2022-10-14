import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  setearFavorito(): void {
    if (this.favorito) {
      this.favorito = false;
      this.favoritosSeteado.emit("Sacado de favoritos");
    } else {
      this.favorito = true;
      this.favoritosSeteado.emit("Agregado a favoritos");
    }
    this.favoritoChange.emit(this.favorito);
  }
}
