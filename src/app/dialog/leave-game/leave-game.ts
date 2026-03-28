import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { QuizService } from '../../game/quiz-game/quiz/quiz.service';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-leave-game-dialog',
  styleUrl: 'leave-game.css',
  standalone: true,
  templateUrl: 'leave-game.html',
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaveGameDialog {
  readonly dialog = inject(MatDialog);

  constructor(
    public quiz: QuizService
) {}

  openDialog() {
    this.dialog.open(LeaveGameDialog, {
      width: '250px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms'
    });
  }

  readonly dialogRef = inject(MatDialogRef<LeaveGameDialog>);

  closeDialog(){
    this.dialogRef.close()
  }

  /* Fecha os games */
  leaveGame() {
    this.dialogRef.close(true)
  }
}
