import {AfterViewInit, Component, OnInit} from '@angular/core';
// @ts-ignore
import Reveal from 'reveal.js';
// @ts-ignore
import Markdown from 'reveal.js';
// @ts-ignore
import Highlight from 'reveal.js';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Reveal.initialize(
      {
        hash: true,
        plugins: [
          Markdown,
          Highlight,
        ]
      }
    );
  }
}
