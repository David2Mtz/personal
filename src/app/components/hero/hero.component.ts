import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO } from '../../data/portfolio.data';
import { SocialLink } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly info = PERSONAL_INFO;
  readonly displayedText = signal<string>('');
  readonly emailFeedback = signal<{ text: string; success: boolean } | null>(null);

  private currentTitleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typeTimeoutId?: any;
  private feedbackTimeoutId?: any;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.typeTimeoutId) {
      clearTimeout(this.typeTimeoutId);
    }
    if (this.feedbackTimeoutId) {
      clearTimeout(this.feedbackTimeoutId);
    }
  }

  private startTypewriter(): void {
    const titles = this.info.titles;
    if (!titles || titles.length === 0) return;

    const currentTitle = titles[this.currentTitleIndex];

    if (this.isDeleting) {
      this.currentCharIndex--;
      this.displayedText.set(currentTitle.substring(0, this.currentCharIndex));
    } else {
      this.currentCharIndex++;
      this.displayedText.set(currentTitle.substring(0, this.currentCharIndex));
    }

    let typeSpeed = this.isDeleting ? 60 : 120;

    if (!this.isDeleting && this.currentCharIndex === currentTitle.length) {
      // Pause at full word
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      // Finished deleting, move to next title
      this.isDeleting = false;
      this.currentTitleIndex = (this.currentTitleIndex + 1) % titles.length;
      typeSpeed = 400;
    }

    this.typeTimeoutId = setTimeout(() => this.startTypewriter(), typeSpeed);
  }

  handleSocialClick(social: SocialLink, event: Event): void {
    if (social.isEmailCopy) {
      event.preventDefault();
      this.copyEmail();
    }
  }

  copyEmail(): void {
    const email = this.info.email;
    navigator.clipboard.writeText(email).then(() => {
      this.emailFeedback.set({
        text: `¡Correo copiado al portapapeles! ${email}`,
        success: true
      });
      this.clearFeedbackAfterDelay();
    }).catch(() => {
      this.emailFeedback.set({
        text: 'No se pudo copiar el correo.',
        success: false
      });
      this.clearFeedbackAfterDelay();
    });
  }

  private clearFeedbackAfterDelay(): void {
    if (this.feedbackTimeoutId) {
      clearTimeout(this.feedbackTimeoutId);
    }
    this.feedbackTimeoutId = setTimeout(() => {
      this.emailFeedback.set(null);
    }, 4500);
  }
}
