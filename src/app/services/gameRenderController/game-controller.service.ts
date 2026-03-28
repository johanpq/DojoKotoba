import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameRenderController {
  /* The game will just render if this variable is True */
  isGameRender: boolean = false
}
