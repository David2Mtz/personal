import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { THESIS_PROJECT } from '../../data/portfolio.data';
import { ThesisProject, ThesisVideo } from '../../models/portfolio.model';

@Component({
  selector: 'app-titulacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titulacion.component.html',
  styleUrl: './titulacion.component.css'
})
export class TitulacionComponent implements AfterViewInit, OnDestroy {
  readonly thesis: ThesisProject = THESIS_PROJECT;
  readonly isExpanded = signal<boolean>(true);
  private readonly sanitizer = inject(DomSanitizer);
  private swiperInstance: Swiper | null = null;

  @ViewChild('videoSwiper') videoSwiperRef?: ElementRef<HTMLDivElement>;
  private youtubeUrlCache = new Map<string, SafeResourceUrl>();

  ngAfterViewInit(): void {
    if (this.isExpanded()) {
      setTimeout(() => {
        this.initSwiper();
      }, 150);
    }
  }

  ngOnDestroy(): void {
    this.destroySwiper();
  }

  toggleDetails(): void {
    const nextState = !this.isExpanded();
    this.isExpanded.set(nextState);

    if (nextState) {
      setTimeout(() => {
        this.initSwiper();
      }, 150);
    } else {
      this.destroySwiper();
    }
  }

  isImage(video: ThesisVideo): boolean {
    if (video.mediaType === 'image') return true;
    if (video.image) return true;
    if (this.isYouTube(video)) return false;
    const candidate = (video.src || video.poster || '').toLowerCase();
    if (candidate.match(/\.(jpg|jpeg|png|webp|gif|svg|avif|heic)$/i)) {
      if (!video.src || video.src.match(/\.(jpg|jpeg|png|webp|gif|svg|avif|heic)$/i)) {
        return true;
      }
    }
    return false;
  }

  getImageUrl(video: ThesisVideo): string {
    let url = video.image || video.src || video.poster || '';
    if (url.toLowerCase().endsWith('.heic')) {
      url = url.replace(/\.heic$/i, '.jpg');
    }
    if (url === 'QUIPO.jpg' || url === 'QUIPO.HEIC') {
      url = 'EQUIPO.jpg';
    }
    return url;
  }

  isYouTube(video: ThesisVideo): boolean {
    if (video.youtubeId) return true;
    if (video.src && (video.src.includes('youtube.com') || video.src.includes('youtu.be'))) {
      return true;
    }
    return false;
  }

  getYouTubeEmbedUrl(video: ThesisVideo): SafeResourceUrl {
    // 2. Si ya procesamos este video, devolvemos la misma referencia exacta
    // Usamos video.id como llave única (asumiendo que video.id existe como veo en tu @for)
    if (this.youtubeUrlCache.has(video.id)) {
      return this.youtubeUrlCache.get(video.id)!;
    }

    let id = video.youtubeId || '';
    if (!id && video.src) {
      if (video.src.includes('v=')) {
        id = video.src.split('v=')[1]?.split('&')[0] || '';
      } else if (video.src.includes('youtu.be/')) {
        id = video.src.split('youtu.be/')[1]?.split('?')[0] || '';
      } else if (video.src.includes('embed/')) {
        id = video.src.split('embed/')[1]?.split('?')[0] || '';
      }
    }
    const cleanId = id.trim();
    const embedUrl = `https://www.youtube.com/embed/${cleanId}?rel=0&modestbranding=1`;

    // 3. Sanitizamos la URL
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);

    // 4. La guardamos en el caché para la próxima vez
    this.youtubeUrlCache.set(video.id, safeUrl);

    return safeUrl;
  }

  private destroySwiper(): void {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }

  private initSwiper(): void {
    if (!this.videoSwiperRef) return;
    this.destroySwiper();

    const element = this.videoSwiperRef.nativeElement;

    this.swiperInstance = new Swiper(element, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: element.querySelector('.swiper-pagination') as HTMLElement,
        clickable: true,
        renderBullet: (index, className) => {
          const item = this.thesis.videos[index];
          const isImg = item ? this.isImage(item) : false;
          const icon = isImg ? 'fa-image' : 'fa-play';
          const label = item?.subtitle || (isImg ? 'Foto del Equipo' : `Video ${index + 1}`);
          return `<span class="${className} video-bullet"><i class="fa-solid ${icon} me-2"></i>${label}</span>`;
        }
      },
      navigation: {
        nextEl: element.querySelector('.swiper-button-next') as HTMLElement,
        prevEl: element.querySelector('.swiper-button-prev') as HTMLElement
      },
      on: {
        slideChange: () => {
          // Pausa automática de videos HTML5 al cambiar de diapositiva
          const videos = element.querySelectorAll('video');
          videos.forEach((video: HTMLVideoElement) => {
            if (!video.paused) {
              video.pause();
            }
          });
        }
      }
    });
  }
}
