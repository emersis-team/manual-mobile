import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { HomePage } from '../home/home';
import { VideoPage } from '../video/video';

@Component({
    selector: 'page-list',
    templateUrl: 'procedimientosCombate.html'
})
export class ProcedimientosCombatePage {

    @ViewChild('slider') slider: Slides;
    @ViewChild("segments") segments: { nativeElement: { childElementCount: any; children: { clientWidth: number; }[]; scrollLeft: any; }; };
    page: any;

    public proteccionItems: { title: string; description: string; src: string; }[];
    public movimientosItems: { title: string; description: string; src: string; }[];;
    public ofensivosItems: { title: string; description: string; src: string; }[];;
    public defensivosItems: { title: string; description: string; src: string; }[];;
    public otrosItems: { title: string; description: string; src: string; }[];;

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

        this.proteccionItems = [
            { title: 'Contra misiles Atan', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Contra Fgo A', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Contra Atq Ae aviones', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Contra Atq Ae helicópteros', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Contra minas', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Contra Obs y Vig', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Tipos de posiciones', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' }
        ];

        this.movimientosItems = [
            { title: 'Formaciones', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Tec(s) Mov', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' }
        ];

        this.ofensivosItems = [
            { title: 'Sec no detectada por el Eno', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Sec detectada por el Eno', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' }
        ];

        this.defensivosItems = [
            { title: 'Defensa desde Pos Lig(s)', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Defensa desde Pos Org(s)', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' }
        ];

        this.otrosItems = [
            { title: 'Observación', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Expl por el Fgo', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Franqueo de Obst (Prot x Fgo)', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Franqueo de Obst Nat(s)', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Ocup Z Reun', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Ab L Distr', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Distr de Unidad', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' }
        ];

    }

    goVideo(
        videoTitle: string,
        videoUrl: string) {

        this.navCtrl.push(VideoPage, {
            videoTitle: videoTitle,
            videoUrl: videoUrl
        });

    }

    goToHome() {
        this.navCtrl.setRoot(HomePage);
    }

    // Initialize slider
    ionViewDidEnter() {
        this.slideChanged();
    }

    // On segment click
    selectedTab(index: number) {
        this.slider.slideTo(index);
    }

    // On slide changed
    slideChanged() {

        let currentIndex = this.slider.getActiveIndex();
        let slides_count = this.segments.nativeElement.childElementCount;

        this.page = currentIndex.toString();
        if (this.page >= slides_count)
            this.page = (slides_count - 1).toString();

        this.centerScroll();

    }

    // Center current scroll
    centerScroll() {
        if (!this.segments || !this.segments.nativeElement)
            return;

        let sizeLeft = this.sizeLeft();
        let sizeLeftVisible = this.sizeLeftVisible();
        let sizeRightVisible = this.sizeRightVisible();
        let middleWindow = window.innerWidth / 2;

        if (sizeLeftVisible > sizeRightVisible) {
            sizeLeftVisible -= middleWindow;
        } else {
            sizeRightVisible -= middleWindow;
            console.log("Move right");
        }
        //console.log(sizeRightVisible - sizeLeftVisible);

        let result = sizeLeft + (sizeLeftVisible - sizeRightVisible);
        console.log(result);

        //let sizeCurrent = this.segments.nativeElement.children[this.page].clientWidth;
        //let result = sizeLeft - (window.innerWidth / 2) + (sizeCurrent / 2);

        result = (result > 0) ? result : 0;
        this.smoothScrollTo(result);

    }

    isInViewport(element: { clientWidth?: number; getBoundingClientRect?: any; }) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Get size start to current
    sizeLeft() {
        let size = 0;
        for (let i = 0; i < this.page; i++) {
            size += this.segments.nativeElement.children[i].clientWidth;
        }
        return size;
    }

    sizeLeftVisible() {
        let size = 0;
        for (let i = 0; i < this.page; i++) {
            if (this.isInViewport(this.segments.nativeElement.children[i]))
                size += this.segments.nativeElement.children[i].clientWidth;
        }
        return size;
    }

    sizeRightVisible() {
        let size = 0;
        for (let i = 4; i > this.page; i--) {
            if (this.isInViewport(this.segments.nativeElement.children[i]))
                size += this.segments.nativeElement.children[i].clientWidth;
        }
        return size;
    }

    // Easing function
    easeInOutQuart(time: number, from: number, distance: number, duration: number) {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    }

    // Animate scroll
    smoothScrollTo(endX: number) {
        let startTime = new Date().getTime();
        let startX = this.segments.nativeElement.scrollLeft;
        let distanceX = endX - startX;
        //console.log(startX, endX, distanceX);
        let duration = 400;

        let timer = setInterval(() => {
            var time = new Date().getTime() - startTime;
            var newX = this.easeInOutQuart(time, startX, distanceX, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            this.segments.nativeElement.scrollLeft = newX;

            //console.log(this.isInViewport(this.segments.nativeElement.children[0]), this.page);
        }, 1000 / 60); // 60 fps
    }

}