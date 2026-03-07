import { CommonModule } from "@angular/common";
import { Header } from "./header/header";
import { Component } from "@angular/core";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Footer
],
  styleUrls: ['./app.css'],
  template: `
    <app-header></app-header>
    <main>
      <section>
        <h2>Aprenda o japonês do Karatê</h2>
        <p>- - - - - Palavras, comandos e filosófia do dojo - - - - -</p>

        <div>
          <button>Começar treino</button>
          <button>Explorar</button>
        </div>

      </section>
      <hr>

      <div>
        <button>
          <img src="/tori.png" alt="Monte Tori">
          <div>
            <h3>Comandos</h3>
            <p><strong>12</strong> Termos</p>
          </div>
        </button>

        <button>
          <img src="/punch.png" alt="Soco">
          <div>
            <h3>Golpes</h3>
            <p><strong>12</strong> Termos</p>
          </div>
        </button>

        <button>
          <img src="/feet.png" alt="Pés">
          <div>
            <h3>Posições</h3>
            <p><strong>12</strong> Termos</p>
          </div>
        </button>

        <button>
          <img src="/number-kanji.png" alt="Kanji de número">
          <div>
            <h3>Números</h3>
            <p><strong>12</strong> Termos</p>
          </div>
        </button>
      </div>
      <hr />
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
