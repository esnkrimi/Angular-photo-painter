import { Component, Input, OnInit } from '@angular/core';
import Konva from "konva"
@Component({
  selector: 'esn-photo-painter',
  templateUrl: 'esn-photo-painter.component.html',
  styleUrls: ['esn-photo-painter.scss']
})
export class EsnPhotoPainterComponent implements OnInit {
  dataURL
  imgShow = false
  p: any = []
  child = 0;
  complete = false;
  constructor() { }
  ngOnInit(): void {
    this.getPixel()
  }

  getPixel() {
    var stage = new Konva.Stage({
      container: 'container',
      width: window.innerWidth,
      height: window.innerHeight,
    });
    var layer = new Konva.Layer();
    var pages = new Konva.Rect({
      x: 0,
      y: 0,
      sides: 3,
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
      radius: 500,
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4,
    });
    pages.on('pointermove', function () {
      var pointerPos = stage.getPointerPosition()!;
      var x = pointerPos.x;
      var y = pointerPos.y;
      console.log(x, y)
      painter(x, y);
    });
    pages.on('mousedown', function () {
      click()
    });
    layer.add(pages);
    const click = () => {
      this.complete = true
      this.dataURL = stage.toDataURL({ pixelRatio: 3 });
      this.imgShow = true
    }

    const painter = (x, y) => {
      if (this.complete === false) {
        let p = [x, y]
        this.child++;
        if (this.child === 2) {
          this.p.push(p)
          let l = this.p.length
          this.child = 0;
          var line = new Konva.Line({
            points: [parseInt(this.p[l - 2][0]), parseInt(this.p[l - 2][1]),
            parseInt(this.p[l - 1][0]), parseInt(this.p[l - 1][1])
            ],
            stroke: 'red',
            strokeWidth: 15,
            lineCap: 'round',
            lineJoin: 'round',
            tension: 1,
          });
          line.on('mousedown', function () {
            click()
          });
          layer.add(line);
        }
      }
    }
    stage.add(layer);
  }
}