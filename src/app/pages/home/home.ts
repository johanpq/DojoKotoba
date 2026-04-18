import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { JapaneseContent } from '../../services/japanese-content/japanese-content.service';
import { IntroduceKarateHome } from "../../introduce-karate-home/introduce-karate-home";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, IntroduceKarateHome],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public content: JapaneseContent) {}

  get qntComandos() {
    return this.content.karateTerms.filter(el => el.category === 'Comandos').length;
  }

  get qntGolpes() {
    return this.content.karateTerms.filter(el => el.category === 'Golpes').length;
  }

  get qntBases() {
    // Note que aqui você usa 'Posições' para bater com o seu serviço
    return this.content.karateTerms.filter(el => el.category === 'Posições').length;
  }

  get qntNumeros() {
    return this.content.karateTerms.filter(el => el.category === 'Números').length;
  }
}
