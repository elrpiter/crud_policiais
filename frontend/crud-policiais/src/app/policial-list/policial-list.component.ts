import { Component, OnInit } from '@angular/core';
import { PoliciaService } from '../policia.service';
import { CommonModule } from '@angular/common'; // Módulo para usar *ngIf e *ngFor

@Component({
  selector: 'app-policial-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policial-list.component.html',
  styleUrl: './policial-list.component.css'
})
export class PolicialListComponent implements OnInit {
  policiais: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private policiaService: PoliciaService) { }

  ngOnInit(): void {
    this.carregarPoliciais();
  }

  carregarPoliciais(): void {
    this.loading = true;
    this.errorMessage = '';
    this.policiaService.listarPoliciais()
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
}