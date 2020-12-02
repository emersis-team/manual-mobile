import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { PjtPage } from '../pjt/pjt';
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

    public proteccionItems: { title: string; description: string; src: string; enabled: boolean }[];
    public movimientosItems: { title: string; description: string; src: string; enabled: boolean }[];;
    public ofensivosItems: { title: string; description: string; src: string; enabled: boolean }[];;
    public defensivosItems: { title: string; description: string; src: string; enabled: boolean }[];;
    public otrosItems: { title: string; description: string; src: string; enabled: boolean }[];;

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

        this.proteccionItems = [
            { title: 'Contra misiles Atan', description: '', src: './assets/imgs/contraAtan.mp4', enabled: true },
            { title: 'Contra Fgo A', description: '', src: '', enabled: false },
            { title: 'Contra Atq Ae aviones', description: '', src: '', enabled: false },
            { title: 'Contra Atq Ae helicópteros', description: '', src: '', enabled: false },
            { title: 'Contra minas', description: '', src: '', enabled: false },
            { title: 'Contra Obs y Vig', description: '', src: '', enabled: false },
            { title: 'Tipos de posiciones', description: '', src: '', enabled: false }
        ];

        this.movimientosItems = [
            { title: 'Formaciones', description: '', src: './assets/imgs/formaciones.mp4', enabled: true },
            { title: 'Tec(s) Mov', description: '', src: '', enabled: false }
        ];

        this.ofensivosItems = [
            { title: 'Sec no detectada por el Eno', description: '', src: '', enabled: false },
            { title: 'Sec detectada por el Eno', description: '', src: '', enabled: false }
        ];

        this.defensivosItems = [
            { title: 'Defensa desde Pos Lig(s)', description: '', src: '', enabled: false },
            { title: 'Defensa desde Pos Org(s)', description: '', src: '', enabled: false }
        ];

        this.otrosItems = [
            { title: 'Observación', description: '', src: '', enabled: false },
            { title: 'Expl por el Fgo', description: '', src: '', enabled: false },
            { title: 'Franqueo de Obst (Prot x Fgo)', description: '', src: '', enabled: false },
            { title: 'Franqueo de Obst Nat(s)', description: '', src: '', enabled: false },
            { title: 'Ocup Z Reun', description: '', src: '', enabled: false },
            { title: 'Ab L Distr', description: '', src: '', enabled: false },
            { title: 'Distr de Unidad', description: '', src: '', enabled: false }
        ];

    }

    goVideo(
        proteccionItem: { title: string; description: string; src: string; enabled: boolean }) {

        if (proteccionItem.enabled)
            this.navCtrl.push(VideoPage, {
                videoTitle: proteccionItem.title,
                videoUrl: proteccionItem.src
            });

    }

    goToHome() {
        this.navCtrl.setRoot(HomePage);
    }

    goToPjt() {
        this.navCtrl.setRoot(PjtPage);
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