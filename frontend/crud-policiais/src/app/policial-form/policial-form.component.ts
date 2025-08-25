import { Component } from '@angular/core';
import { PoliciaService } from '../policia.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-policial-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './policial-form.component.html',
  styleUrl: './policial-form.component.css'
})
export class PolicialFormComponent {
  policial: any = {};
  message: string = '';
  isSuccess: boolean = false;

  constructor(private policiaService: PoliciaService) {}

  onSubmit(): void {
    // Chama o método do serviço para cadastrar o policial
    this.policiaService.cadastrarPolicial(this.policial)
      .subscribe({
        next: (response) => {
          this.message = 'Policial cadastrado com sucesso!';
          this.isSuccess = true;
          this.policial = {}; // Limpa o formulário
        },
        error: (error) => {
          console.error('Erro ao cadastrar policial:', error);
          this.message = error.error.error || 'Erro ao cadastrar policial.';
          this.isSuccess = false;
        }
      });
  }
}