import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio para saber si el sistema se está viendo en dispositivos móbiles: 
 * Smartphone o tablet.
 */
export class MobileComponentService {

  /**
   * Indica si la resolución actual es para un dispositivo móvil o no
   */
  isMobile: boolean = false;
  /**
   * Indica si la resolución actual es de una tablet o no
   */
  isTablet: boolean = false;

  /**
   * Constructor
   */
  constructor() {
   }

  /**
   * Función que establece si la resolución actual es para un móvil o no
   */
  public setIsMobile() {
    this.isTablet = false;
    this.isMobile = false;
    const media = window.matchMedia("(max-width: 575px)");
    const mediaTablet = window.matchMedia('(min-width: 600px) and (max-width: 959px)');
    const mediaTabletLarge = window.matchMedia('(min-width: 960px) and (max-width: 1281px)');
    if (media.matches) { // If media query matches
      this.isMobile = true;
    } else if (mediaTablet.matches || mediaTabletLarge.matches) {
      this.isTablet = true;
    }

    if (!this.isMobile && !this.isTablet) {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.isTablet = true;
      }
    }
  }
}
