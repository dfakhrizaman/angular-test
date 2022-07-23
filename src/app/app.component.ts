import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = 0;
  pokemon = '';

  getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((response) => {
        if (response === null) {
          return;
        }
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        this.pokemon = data.name;
        console.log(this.pokemon);
      });
  }

  add() {
    this.count++;
  }
}
