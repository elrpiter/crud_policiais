import { Component, OnInit } from '@angular/core';
import { PoliciaService } from '../policia.service';
import { CommonModule } from '@angular/common'; // Módulo para usar *ngIf e *ngFor
import { FormsModule } from '@angular/forms'; // Módulo para usar ngModel

@Component({
  selector: 'app-policial-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Certifique-se que FormsModule está aqui
  templateUrl: './policial-list.component.html',
  styleUrl: './policial-list.component.css'
})
export class PolicialListComponent implements OnInit {
  policiais: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';
  searchTerm: string = '';

  constructor(private policiaService: PoliciaService) { }

  ngOnInit(): void {
    this.carregarPoliciais();
  }

  carregarPoliciais(params: any = {}): void {
    this.loading = true;
    this.errorMessage = '';
    this.policiaService.listarPoliciais(params)
      .subscribe({
        next: (data) => {
          this.policiais = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Erro ao buscar policiais:', error);
          this.errorMessage = 'Erro ao carregar a lista de policiais.';
          this.loading = false;
        }
      });
  }

  // As funções aplicarFiltro e limparFiltro devem estar aqui, fora de carregarPoliciais
  aplicarFiltro(): void {
    if (this.searchTerm.trim() === '') {
      this.carregarPoliciais(); // Se o campo estiver vazio, carrega todos
    } else {
      const params = {
        cpf: this.searchTerm.trim(),
        rg: this.searchTerm.trim()
      };
      this.carregarPoliciais(params); // Carrega com o filtro
    }
  }

  limparFiltro(): void {
    this.searchTerm = '';
    this.carregarPoliciais(); // Recarrega a lista sem filtro
  }
}