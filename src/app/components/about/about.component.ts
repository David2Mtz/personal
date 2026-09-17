import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOBBIES_DATA } from '../../data/portfolio.data';
import { HobbyItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly hobbies: HobbyItem[] = HOBBIES_DATA;
}
