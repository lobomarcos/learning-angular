import { Component, signal } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('gerador-certificado');
}
