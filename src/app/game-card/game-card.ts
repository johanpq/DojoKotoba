import { Component, Input } from '@angular/core';
import { ModalGames } from "../modal/modal-games/modal-games";
import { GameListType } from '../types/game-types';
import { GameRenderController } from '../services/gameRenderController/game-controller.service';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [ModalGames],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  @Input() games!: GameListType[]

  constructor(public gameController: GameRenderController) {}

  isButtonToPlayClicked: boolean = false

  goToGame() {
    this.gameController.isGameRender = true
  }
}
