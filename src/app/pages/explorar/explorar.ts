import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { KotobaCards } from "../../kotoba-cards/kotoba-cards";
import { Footer } from "../../footer/footer";
import { JapaneseContent } from '../../services/japanese-content/japanese-content.service';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { heroInformationCircle } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [Header, KotobaCards, Footer, NgIcon],
  templateUrl: './explorar.html',
  providers: [provideIcons({ heroInformationCircle })],
  styleUrl: './explorar.css',
})
export class Explorar {
  categories = ['Todos', 'Comandos', 'Golpes', 'Posições', 'Números']

  selectedCategory: string = 'Comandos'
  searchTerm = ''

  constructor(public contents: JapaneseContent) {}

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement
    this.searchTerm = input.value
  }

  get karateTermsFunc() {
    return this.contents.karateTerms.filter((el) => {

      if(this.selectedCategory === 'Todos') return el

      /* Retorna categoria */
      const matchCategory =
        el.category === this.selectedCategory

      /* Retorna do input */
      const matchSearch =
        el.japanese.toLowerCase().includes(this.searchTerm.toLowerCase())

      return matchCategory && matchSearch
    })
  }

  changeCategory(value: string) {
    this.selectedCategory = value
  }

}
