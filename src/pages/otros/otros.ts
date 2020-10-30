import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ProcedimientosCombatePage } from '../procedimientosCombate/procedimientosCombate';
import { HomePage } from '../home/home';
import { VideoPage } from '../video/video';

@Component({
    selector: 'page-list',
    templateUrl: 'otros.html'
})
export class OtrosPage {

    @ViewChild('slider') slider: Slides;
    @ViewChild("segments") segments: { nativeElement: { childElementCount: any; children: { clientWidth: number; }[]; scrollLeft: any; }; };
    page: any;

    public otros1Items: { title: string; description: string; src: string; }[];
    public otros2Items: { title: string; description: string; src: string; }[];;

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

        this.otros1Items = [
            { title: 'Video 1', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' },
            { title: 'Video 2', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' }
        ];

        this.otros2Items = [
            { title: 'Video 3', description: 'Lorem ipsum.', src: './assets/imgs/video3.mp4' }
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

    goToProcedimientosCombate() {
        this.navCtrl.setRoot(ProcedimientosCombatePage);
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

        let sizeCurrent = this.segments.nativeElement.children[this.page].clientWidth;
        let result = sizeLeft - (window.innerWidth / 2) + (sizeCurrent / 2);

        result = (result > 0) ? result : 0;
        this.smoothScrollTo(result);

    }

    // Get size start to current
    sizeLeft() {
        let size = 0;
        for (let i = 0; i < this.page; i++) {
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