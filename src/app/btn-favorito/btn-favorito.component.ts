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

  constructor() {
    this.favoritoChange = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  setearFavorito(favorito: boolean) {
    if (favorito) {
      favorito = false;
    } else {
      favorito = true;
    }
    this.favoritoChange.emit(this.favorito);
  }
}
