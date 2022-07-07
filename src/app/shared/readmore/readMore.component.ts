import { Component, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'read-more',
    template: `
        <pre class="break-line" [innerHTML]="currentText"></pre>
        <div class="text-right text-dark">
        <a [class.hidden]="hideToggle" (click)="toggleView()" *ngIf="text.length >= maxLength " >... See {{isCollapsed? 'more':'less'}}</a>
        </div>
            
    `
})

export class ReadMoreComponent implements OnChanges {
    @Input() text: string;
    @Input() maxLength: number;
    currentText: string;
    hideToggle: boolean = true;

    public isCollapsed: boolean = true;

    constructor(private elementRef: ElementRef) {

    }
    toggleView() {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
    }
    determineView() {
        if (!this.text || this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        if (this.isCollapsed == true) {
            this.currentText = this.text.substring(0, this.maxLength) + "...";
        } else if (this.isCollapsed == false) {
            this.currentText = this.text;
        }

    }
    ngOnChanges() {
        this.determineView();
    }
}