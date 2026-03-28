import { Component, EventEmitter, Output } from '@angular/core';
import { QuizService } from '../../game/quiz-game/quiz/quiz.service';

@Component({
  selector: 'app-modal-feedback',
  standalone: true,
  imports: [],
  templateUrl: './modal-feedback.html',
  styleUrl: './modal-feedback.css',
})
export class ModalFeedback {
  /* Emite um sinal para o componente pai */
  @Output() restart = new EventEmitter()

  constructor(public quiz: QuizService) {}

  get getTotalQuestions() {
    return this.quiz.total;
  }

  get getCorrectQuestions() {
    return this.quiz.correctAnswer;
  }

  get getWrongQuestions() {
    return this.quiz.wrongAnswer;
  }

  get scorePercentage() {
    return this.quiz.percentage;
  }

  get resultMessage() {
    if (this.scorePercentage >= 80) return 'Excelente!';
    if (this.scorePercentage >= 60) return 'Ótimo resultado!';
    if (this.scorePercentage >= 40) return 'Bom, mas pode melhorar!';
    return 'Continue treinando!';
  }

  /* Faz o quiz fechar o jogo */
  exitGame() {
    this.quiz.closeGame()
  }

  /* Método para fazer o restart do componente pai sem reload */
  resetQuiz(){
    this.restart.emit();
  }
}
