import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
templateUrl: 'heroe.component.html'})

export class HeroeComponent{

    nombre: string = 'Midoriya Izuku';
    edad: number = 17;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase;
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${this.edad}`}
}