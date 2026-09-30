import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECHNOLOGIES_DATA } from '../../data/portfolio.data';
import { TechnologiesSection } from '../../models/portfolio.model';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  readonly techData: TechnologiesSection = TECHNOLOGIES_DATA;
  readonly selectedCategory = signal<string>('all');

  readonly categoriesList = computed(() => {
    return ['all', ...this.techData.categories.map(c => c.category)];
  });

  readonly filteredCategories = computed(() => {
    const filter = this.selectedCategory();
    if (filter === 'all') {
      return this.techData.categories;
    }
    return this.techData.categories.filter(c => c.category === filter);
  });

  setFilter(category: string): void {
    this.selectedCategory.set(category);
  }
}
