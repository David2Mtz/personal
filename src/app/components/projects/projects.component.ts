import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { PROJECTS } from '../../data/portfolio.data';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  readonly projects: Project[] = PROJECTS;
  private swiperInstances: Swiper[] = [];

  @ViewChildren('swiperContainer') swiperContainers!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit(): void {
    // Wait for the DOM to render the swiper elements
    setTimeout(() => {
      this.initSwipers();
    }, 100);
  }

  ngOnDestroy(): void {
    this.swiperInstances.forEach(swiper => swiper.destroy(true, true));
    this.swiperInstances = [];
  }

  private initSwipers(): void {
    if (!this.swiperContainers) return;

    this.swiperContainers.forEach((containerRef) => {
      const element = containerRef.nativeElement;
      const paginationEl = element.querySelector('.swiper-pagination') as HTMLElement;
      const prevEl = element.querySelector('.swiper-button-prev') as HTMLElement;
      const nextEl = element.querySelector('.swiper-button-next') as HTMLElement;
      const slidesCount = element.querySelectorAll('.swiper-slide').length;
      if (slidesCount === 0) return;

      const instance = new Swiper(element, {
        modules: [Navigation, Pagination, Autoplay],
        loop: slidesCount > 1,
        autoplay: slidesCount > 1 ? {
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        } : false,
        pagination: {
          el: paginationEl,
          clickable: true
        },
        navigation: {
          nextEl: nextEl,
          prevEl: prevEl
        },
        grabCursor: true
      });

      this.swiperInstances.push(instance);
    });
  }
}
