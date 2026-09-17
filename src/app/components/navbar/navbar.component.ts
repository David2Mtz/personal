import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_ITEMS, PERSONAL_INFO } from '../../data/portfolio.data';
import { NavItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly navItems: NavItem[] = NAV_ITEMS;
  readonly personalInfo = PERSONAL_INFO;
  readonly activeSection = signal<string>('inicio');
  readonly isScrolled = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY;
    this.isScrolled.set(scrollPosition > 50);

    const sections = ['inicio', 'proyectos', 'formacion', 'sobremi'];
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop - 120;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  scrollTo(targetId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection.set(targetId);
      this.isMobileMenuOpen.set(false);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }
}
