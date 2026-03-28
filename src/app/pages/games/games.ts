import { Component, Type } from '@angular/core';
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { GameCard } from "../../game-card/game-card";
import { QuizComponent } from '../../game/quiz-game/quiz/quiz';
import { GameListType } from '../../types/game-types';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [Header, Footer, GameCard],
  templateUrl: './games.html',
  styleUrl: './games.css',
})

export class Games {
  gameList: GameListType[] = [
    {
      title: "Quiz de Termos",
      description: "Teste seu conhecimento sobre todos os termos do karatê.",
      image: "/games/quiz-game.png",
      component: QuizComponent
    },
  ]

}
