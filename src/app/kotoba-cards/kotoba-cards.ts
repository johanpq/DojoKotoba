import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kotoba-cards',
  standalone: true,
  imports: [],
  templateUrl: './kotoba-cards.html',
  styleUrl: './kotoba-cards.css',
})
export class KotobaCards {
  @Input() title!: string
  @Input() meaning!: string
  @Input() category!: string
  @Input() imageUrl?: string

  toogleCard: boolean = false

  toogleCardFunc() {
    this.toogleCard = !this.toogleCard
  }
}
