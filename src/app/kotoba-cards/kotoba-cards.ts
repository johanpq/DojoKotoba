import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-kotoba-cards',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './kotoba-cards.html',
  styleUrl: './kotoba-cards.css',
})
export class KotobaCards {
  @Input() title!: string
  @Input() meaning!: string
  @Input() category!: string
  @Input() imageUrl!: string
  @Input() isPriority: boolean = false

  toogleCard: boolean = false

  toogleCardFunc() {
    this.toogleCard = !this.toogleCard
  }
}
