import { Component } from '@angular/core';
import { ModalFeedback } from "../../../modal/modal-feedback/modal-feedback";
import { QuizService } from './quiz.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-karate-quiz',
  standalone: true,
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css'],
  imports: [ModalFeedback, NgOptimizedImage]
})
export class QuizComponent {
  constructor(
    public quiz: QuizService) {}

  options: any[] = [];

  ngOnInit() {
    this.generateQuestion();
  }

  generateQuestion() {
    /* console.log("Questions Left:", this.questionsLeft)
    console.log("Question Done", this.questionDone)
    console.log("Resposta correta: ", this.correctAnswer)
    console.log("Resposta errada: ", this.wrongAnswer) */
    let randomIndex = Math.floor(Math.random() * this.quiz.contents.karateTerms.length);

    while(this.quiz.questionDone.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * this.quiz.contents.karateTerms.length);
    }

    this.quiz.questionDone.push(randomIndex);

    this.quiz.questionsLeft = this.quiz.contents.karateTerms.length - this.quiz.questionDone.length;

    this.quiz.currentQuestion = this.quiz.contents.karateTerms[randomIndex];


    this.quiz.currentQuestion = this.quiz.contents.karateTerms[randomIndex];

    const wrongOptions = this.quiz.contents.karateTerms
      .filter(t => t.meaning !== this.quiz.currentQuestion.meaning)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    this.options = [...wrongOptions, this.quiz.currentQuestion]
      .sort(() => 0.5 - Math.random());
  }

  checkAnswer(option:any){

    if(option.meaning === this.quiz.currentQuestion.meaning){
      this.quiz.isCorrect = true
      this.quiz.correctAnswer++

    } else {
      this.quiz.isCorrect = false
      this.quiz.wrongAnswer++
    }

    if(this.quiz.questionDone.length >= this.quiz.contents.karateTerms.length) {
      this.quiz.limitReached = true
      return
    }

    this.generateQuestion();
  }

  get getTotalQuestions() {
    return this.quiz.contents.karateTerms.length
  }

  get getQuestionsDone() {
    return this.quiz.questionDone.length
  }

  get getCorrectQuestions() {
    return this.quiz.correctAnswer
  }

  get getWrongQuestions() {
    return this.quiz.wrongAnswer
  }

  get progressPercentage() {
    return (this.getQuestionsDone / this.getTotalQuestions) * 100;
  }

  resetQuiz(){
    this.quiz.resetQuiz()
    this.generateQuestion()
  }
}
