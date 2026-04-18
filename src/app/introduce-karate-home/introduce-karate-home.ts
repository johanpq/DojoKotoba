import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-introduce-karate-home',
  standalone: true,
  imports: [],
  templateUrl: './introduce-karate-home.html',
  styleUrl: './introduce-karate-home.css',
})
export class IntroduceKarateHome {
  @Input() title!: string
  @Input() description!: string
  @Input() tag!: string
  @Input() img!: string
  @Input() reverse!: boolean
}
