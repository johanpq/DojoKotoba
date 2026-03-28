import { Injectable } from '@angular/core';
import { JapaneseContent } from '../../../services/japanese-content/japanese-content.service';
import { GameRenderController } from '../../../services/gameRenderController/game-controller.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    public contents: JapaneseContent,
    public gameController: GameRenderController
  ) {}

  limitReached: boolean = false
  isCorrect: boolean | undefined = undefined
  questionsLeft: number = 0
  questionDone: any[] = []
  currentQuestion: any;
  correctAnswer: number = 0
  wrongAnswer: number = 0
  correct = 0;
  wrong = 0;

  get total() {
    return this.contents.karateTerms.length
  }

  get percentage() {
    if (this.contents.karateTerms.length === 0) return 0;
    return Math.round((this.correctAnswer / this.contents.karateTerms.length) * 100);
  }

  resetQuiz() {
    this.limitReached = false
    this.isCorrect = undefined

    this.questionsLeft = 0

    this.questionDone = []

    this.currentQuestion = undefined

    this.correctAnswer = 0
    this.wrongAnswer = 0

    this.correct = 0
    this.wrong = 0
  }

  closeGame() {
    this.gameController.isGameRender = false
    this.resetQuiz()
  }

}
