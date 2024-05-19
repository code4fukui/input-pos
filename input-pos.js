export class InputPos extends HTMLElement {
  constructor() {
    super();
    this.style.display = "inline-block";
    const canvas = this.canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 100;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    this.g = this.canvas.getContext("2d");
    this.appendChild(this.canvas);

    const ondrag = (x, y) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const px = x / w;
      const py = 1 - y / h;
      if (px < 0 || py < 0 || px > 1 || py > 1) return;
      this.valuex = px;
      this.valuey = py;
      if (this.oninput) {
        this.oninput({
          target: this,
          value: w > h ? px : py,
          valuex: px,
          valuey: py,
        });
      }
    };

    let drag = false;
    if (canvas.ontouchstart === undefined) {
      canvas.onmouseout = () => {};
      canvas.onmousedown = (e) => {
        drag = true;
        ondrag(e.offsetX, e.offsetY);
        if (this.onpress) this.onpress();
      };
      canvas.onmouseup = () => {
        drag = false;
        if (this.onrelease) this.onrelease();
      };
      canvas.onmousemove = (e) => {
        if (!drag) return;
        ondrag(e.offsetX, e.offsetY);
      };
    } else {
      canvas.ontouchmove = (e) => {
        const offx = canvas.offsetLeft;
        const offy = canvas.offsetTop;
        for (let i = 0; i < e.touches.length; i++) {
          const t = e.touches[i];
          const x = t.pageX - offx;
          const y = t.pageY - offy;
          ondrag(x, y);
        }
      };
      canvas.ontouchstart = (e) => {
        canvas.ontouchmove(e);
        if (this.onpress) this.onpress();
        e.preventDefault();
      };
      canvas.ontouchend = (e) => {
        if (this.onrelease) this.onrelease();
      };
    }
  }
  get value() {
    const canvas = this.canvas;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    return w > h ? this.valuex : this.valuey;
  }
};

customElements.define("input-pos", InputPos);
