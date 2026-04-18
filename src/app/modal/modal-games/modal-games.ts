import { ChangeDetectorRef, Component, inject, Input, OnDestroy, OnInit, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgIcon } from '@ng-icons/core';
import { provideIcons } from '@ng-icons/core';
import { heroXMark } from '@ng-icons/heroicons/outline';
import { LeaveGameDialog } from "../../dialog/leave-game/leave-game";
import { QuizService } from '../../game/quiz-game/quiz/quiz.service';
import { GameRenderController } from '../../services/gameRenderController/game-controller.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-modal-games',
  standalone: true,
  imports: [NgIcon, NgComponentOutlet],
  templateUrl: './modal-games.html',
  providers: [provideIcons({ heroXMark })],
  styleUrl: './modal-games.css',
})
export class ModalGames implements OnInit, OnDestroy {
  @Input() closeThisModal: boolean = false
  @Input() gameComponent!: Type<any>

  readonly dialog = inject(MatDialog);

  constructor(
    private cdr: ChangeDetectorRef,
    public quiz: QuizService,
    public gameController: GameRenderController
  ) {}

  /* Disable scroll when the component is created */
  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  // Re-enable scroll when the component is destroyed
  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

  openLeaveDialog() {

    const dialogRef = this.dialog.open(LeaveGameDialog, {
      width: '300px',
      disableClose: true /* Evita fechar diálogo fora da tela */
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result == true){
        /* console.log("Saiu do jogo"); */
        this.quiz.closeGame()

        // 3. Forçar o Angular a atualizar o HTML!
        this.cdr.detectChanges()
      }

    });

  }

}
