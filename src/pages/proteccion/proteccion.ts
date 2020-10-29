import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { HomePage } from '../home/home';
import { VideoPage } from '../video/video';

@Component({
    selector: 'page-list',
    templateUrl: 'proteccion.html'
})
export class ProteccionPage {

    @ViewChild('slider') slider: Slides;
    @ViewChild("segments") segments;
    page: any;

    constructor(public navCtrl: NavController) {

    }

    goVideo(videoUrl: string) {

        this.navCtrl.setRoot(VideoPage, {
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
    selectedTab(index) {
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

    isInViewport(element) {
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

    // Easing function
    easeInOutQuart(time, from, distance, duration) {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    }

    // Animate scroll
    smoothScrollTo(endX) {
        let startTime = new Date().getTime();
        let startX = this.segments.nativeElement.scrollLeft;
        let distanceX = endX - startX;
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