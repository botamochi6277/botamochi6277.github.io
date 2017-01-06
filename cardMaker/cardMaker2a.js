function fillsize() {
  console.log("OS: " + window.navigator.userAgent);
  var ua = window.navigator.userAgent;
  if (ua.match(/Win/)) {
    var dpi = 96;
  }
  else {
    var dpi = 72;
  }
  var elm_u = document.getElementById("unit");
  var k = 1; // mm to ???
  switch (elm_u.value) {
  case "cm":
    k = 0.1 //1cm = 10mm
    break;
  case "in":
    k = 1 / 25.4 //1in = 25.4mm
    break;
  case "pt":
    k = 72 / 25.4 // 1pt = 1/72in = 25.4/72mm
    break;
  case "px":
    k = dpi / 25.4 // 1px = 1/72dpi = 25.4/72mm
    break;
  }
  var k2 = 1; // mm to ???
  switch (document.getElementById("slaveUnit1").innerHTML) {
  case "cm":
    k2 = 0.1 //1cm = 10mm
    break;
  case "in":
    k2 = 1 / 25.4 //1in = 25.4mm
    break;
  case "pt":
    k2 = 72 / 25.4 // 1pt = 1/72in = 25.4/72mm
    break;
  case "px":
    k2 = dpi / 25.4 // 1px = 1/72dpi = 25.4/72mm
    break;
  }
  document.getElementById("slaveUnit0").innerHTML = elm_u.value; // Margin
  var paper_size = document.getElementById("paper_size");
  var elm_w = document.getElementById("paper_width");
  var elm_h = document.getElementById("paper_height");
  var margin_x = document.getElementById("margin_x");
  var margin_y = document.getElementById("margin_y");
  console.log("paper_size: " + paper_size.value);
  switch (paper_size.value) {
  case "A4":
    elm_w.value = (k * 210).toFixed(2); // mm
    elm_h.value = (k * 297).toFixed(2); // mm
    elm_w.disabled = true;
    elm_h.disabled = true;
    margin_x.value = (k * 14.0).toFixed(2); // mm
    margin_y.value = (k * 11.0).toFixed(2); // mm
    break;
  case "B5":
    elm_w.value = (k * 176).toFixed(2); // mm
    elm_h.value = (k * 250).toFixed(2); // mm
    elm_w.disabled = true;
    elm_h.disabled = true;
    margin_x.value = (k * 10).toFixed(2); // mm
    margin_y.value = (k * 9).toFixed(2); // mm
    break;
  case "Letter":
    elm_w.value = (k * 215.9).toFixed(2); // mm
    elm_h.value = (k * 279.4).toFixed(2); // mm
    elm_w.disabled = true;
    elm_h.disabled = true;
    margin_x.value = (k * 14).toFixed(2); // mm
    margin_y.value = (k * 11).toFixed(2); // mm
  default:
    elm_w.disabled = false;
    elm_h.disabled = false;
    elm_w.value = (k / k2 * elm_w.value).toFixed(2);
    elm_h.value = (k / k2 * elm_h.value).toFixed(2);
    break;
  }
  var isSwap = (document.getElementById("landscape").checked && 1.0 * elm_w.value < 1.0 * elm_h.value) || (document.getElementById("portrait").checked && 1.0 * elm_w.value > 1.0 * elm_h.value);
  if (isSwap) {
    console.log("w: " + elm_w.value + ", H: " + elm_h.value + ", isLandscape: " + document.getElementById("landscape").checked);
    var tmp = elm_w.value;
    elm_w.value = elm_h.value;
    elm_h.value = tmp;
    tmp = margin_x.value;
    margin_x.value = margin_y.value;
    margin_y.value = tmp;
  }
  console.log("margin:" + margin_x.value + ", " + margin_y.value);
  var card_size = document.getElementById("card_size");
  var elm_cw = document.getElementById("card_width");
  var elm_ch = document.getElementById("card_height");
  var rows = document.getElementById("card_rows");
  var cols = document.getElementById("card_cols");
  var elm_cmx = document.getElementById("cardMarginX");
  var elm_cmy = document.getElementById("cardMarginY");
  switch (card_size.value) {
  case "tokyo4":
    elm_cw.value = (k * 91).toFixed(2);
    elm_ch.value = (k * 55).toFixed(2);
    rows.value = 5;
    cols.value = 2;
    elm_ch.disabled = true;
    elm_cw.disabled = true;
    elm_cmx.value = 0;
    elm_cmy.value = 0;
    break;
  case "smart":
    elm_cw.value = (k * 89).toFixed(2);
    elm_ch.value = (k * 51).toFixed(2);
    rows.value = 5;
    cols.value = 2;
    elm_ch.disabled = true;
    elm_cw.disabled = true;
    elm_cmx.value = 0;
    elm_cmy.value = 0;
    break;
  case "full":
    elm_cw.value = elm_w.value - 2 * margin_x.value;
    elm_ch.value = elm_h.value - 2 * margin_y.value;
    rows.value = 1;
    cols.value = 1;
    elm_ch.disabled = true;
    elm_cw.disabled = true;
    elm_cmx.value = 0;
    elm_cmy.value = 0;
    break;
  case "sqrt":
    elm_cw.value = (k * 60).toFixed(2);
    elm_ch.value = (k * 60).toFixed(2);
    rows.value = 4;
    cols.value = 3;
    elm_cmx.value = 0;
    elm_cmy.value = 0;
    elm_ch.disabled = false;
    elm_cw.disabled = false;
    break;
  case "KPC-HH110-20":
    elm_cw.value = (k * 86.4).toFixed(2);
    elm_ch.value = (k * 50.8).toFixed(2);
    rows.value = 5;
    cols.value = 2;
    elm_ch.disabled = true;
    elm_cw.disabled = true;
    elm_cmx.value = (k * 0).toFixed(2);
    elm_cmy.value = 0;
    margin_x.value = (k * 18.6).toFixed(2);
    margin_y.value = (k * 21.5).toFixed(2);
    break;
  case "KPC-HH112-20":
    elm_cw.value = (k * 84).toFixed(2);
    elm_ch.value = (k * 42).toFixed(2);
    rows.value = 6;
    cols.value = 2;
    elm_ch.disabled = true;
    elm_cw.disabled = true;
    elm_cmx.value = (k * 4).toFixed(2);
    elm_cmy.value = 0;
    margin_x.value = (k * 19).toFixed(2);
    margin_y.value = (k * 22.5).toFixed(2);
    break;
  case "KPC-HH124-20":
    elm_cw.value = (k * 66).toFixed(2);
    elm_ch.value = (k * 35).toFixed(2);
    rows.value = 8;
    cols.value = 3;
    elm_ch.disabled = true;
    elm_cw.disabled = true;
    elm_cmx.value = 0;
    elm_cmy.value = 0;
    margin_x.value = (k * 6).toFixed(2);
    margin_y.value = (k * 8.5).toFixed(2);
    break;
  default:
    //
    elm_cw.value = (k / k2 * elm_cw.value).toFixed(2);
    elm_ch.value = (k / k2 * elm_ch.value).toFixed(2);
    elm_ch.disabled = false;
    elm_cw.disabled = false;
    break;
  }
  document.getElementById("slaveUnit1").innerHTML = elm_u.value; // Card size
  document.getElementById("slaveUnit2").innerHTML = elm_u.value; // Card margin
  var card_id = document.getElementById("card_id");
  if (document.getElementById("multiple").checked) {
    card_id.style.display = "block";
  }
  else {
    card_id.style.display = "none";
    document.getElementById("initial").checked = true;
    //    setId();
  }
  console.log("rows*cols: " + rows.value * cols.value);
  console.log("elm_u.disabled: " + elm_u.disabled);
}
/**
 * @brief Card/label Class
 */
var card = function (x, y, k) {
  this.x = x;
  this.y = y;
  this.k = k;
  this.width = this.k * Number(document.getElementById("card_width").value);
  this.height = this.k * Number(document.getElementById("card_height").value);
  this.refW = 0;
  this.refH = 0;
  this.refX = 0;
  this.refY = 0;
  this.stnd;
  this.layout = "center";
  this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  this.cap = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  this.subcap = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  this.icon = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  this.id = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  this.outline;
  this.group.appendChild(this.outline);
  this.group.appendChild(this.cap);
  this.group.appendChild(this.subcap);
  this.group.appendChild(this.icon);
  this.group.appendChild(this.id);
};
card.prototype.setOutline = function () {
  var outlineType = document.getElementById("card_outline").value;
  //  Outline
  this.outline = document.createElementNS('http://www.w3.org/2000/svg', outlineType);
  this.width = this.k * Number(document.getElementById("card_width").value);
  this.height = this.k * Number(document.getElementById("card_height").value);
  switch (outlineType) {
  case "ellipse":
    // Ellipse outline
    this.outline = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    outline.setAttributeNS(null, 'cx', this.x + 0.5 * card_width);
    outline.setAttributeNS(null, 'cy', this.y + 0.5 * card_height);
    outline.setAttributeNS(null, 'rx', 0.5 * card_width);
    outline.setAttributeNS(null, 'ry', 0.5 * card_height);
    this.this.refW = 0.9 * this.width;
    this.this.refH = 0.9 * this.height;
    this.this.refX = this.x + 0.5 * (this.width - this.this.refW);
    this.this.refY = this.y + 0.5 * (this.height - this.this.refH);
    if (this.this.refW > this.this.refH) {
      this.stnd = this.this.refH;
    }
    else {
      this.stnd = this.this.refW;
    }
    break;
  case "diamond":
    this.outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var d = "M " + (this.x) + " " + (this.y + 0.5 * this.height);
    d += " L " + (this.x + 0.5 * this.width) + " " + (this.y + this.height);
    d += " L " + (this.x + this.width) + " " + (this.y + 0.5 * this.height);
    d += " L " + (this.x + 0.5 * this.width) + " " + (this.y) + " z";
    this.outline.setAttributeNS(null, 'd', d);
    this.this.refW = 0.707 * this.width;
    this.this.refH = 0.707 * this.height;
    this.this.refX = this.x + 0.5 * (this.width - this.this.refW);
    this.this.refY = this.y + 0.5 * (this.height - this.this.refH);
    if (this.this.refW > this.this.refH) {
      this.stnd = this.this.refH;
    }
    else {
      this.stnd = this.this.refW;
    }
    break;
  case "capsule":
    this.this.refW = this.width;
    this.this.refH = this.height;
    this.this.refX = this.x;
    this.this.refY = this.y;
    if (this.this.refW > this.this.refH) {
      this.stnd = this.this.refH;
    }
    else {
      this.stnd = this.this.refW;
    }
    this.outline = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    this.outline.setAttributeNS(null, 'x', this.x);
    this.outline.setAttributeNS(null, 'y', this.y);
    this.outline.setAttributeNS(null, 'width', card_width);
    this.outline.setAttributeNS(null, 'height', card_height);
    this.outline.setAttributeNS(null, 'rx', 0.5 * stnd);
    this.outline.setAttributeNS(null, 'ry', 0.5 * stnd);
    break;
  case "hex":
    const PI = 3.14195;
    this.outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var d = "M " + (this.x + 0.5 * card_width) + " " + (this.y);
    for (var i = 1; i < 6; i++) {
      d += " L " + (this.x + 0.5 * this.width - 0.5 * this.width * Math.sin(PI * i / 3)) + " " + (this.y + 0.5 * this.height - 0.5 * this.height * Math.cos(PI * i / 3));
    }
    d += " z";
    // console.log(d);
    // console.log(Math.sin(PI * 0.5));
    this.outline.setAttributeNS(null, 'd', d);
    this.this.refW = 0.9 * this.width;
    this.this.refH = 0.9 * this.height;
    this.this.refX = this.x + 0.5 * (this.width - this.this.refW);
    this.this.refY = this.y + 0.5 * (this.height - this.this.refH);
    if (this.this.refW > this.this.refH) {
      this.stnd = this.this.refH;
    }
    else {
      this.stnd = this.this.refW;
    }
    break;
  default:
    this.this.refW = this.width;
    this.this.refH = this.height;
    this.this.refX = this.x;
    this.this.refY = this.y;
    if (this.this.refW > this.this.refH) {
      this.stnd = this.this.refH;
    }
    else {
      this.stnd = this.this.refW;
    }
    this.outline = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    this.outline.setAttributeNS(null, 'x', this.x);
    this.outline.setAttributeNS(null, 'y', this.y);
    this.outline.setAttributeNS(null, 'width', card_width);
    this.outline.setAttributeNS(null, 'height', card_height);
    break;
  }
  this.outline.setAttributeNS(null, 'stroke-width', this.stnd / 500);
  this.outline.setAttributeNS(null, 'fill', 'none');
  this.outline.setAttributeNS(null, 'stroke-dasharray', this.width / 100 + "," + this.height / 50);
};
card.prototype.setContents = function () {
    this.setOutline();
    this.cap.innerHTML = document.getElementById("cap").value;
    this.subcap.innerHTML = document.getElementById("subcap").value;
    this.icon.innerHTML = document.getElementById("icon").value;
    if (this.icon.innerHTML != "") {
      if (this.cap.innerHTML != "") {
        if (this.subcap.innerHTML != "") {
          // Full contents
          this.cap.setAttributeNS(null, 'font-weight', "bold");
          this.cap.setAttributeNS(null, 'text-anchor', "middle");
          this.cap.setAttributeNS(null, 'dominant-baseline', "central");
          this.subcap.setAttributeNS(null, 'text-anchor', "middle");
          this.subcap.setAttributeNS(null, 'dominant-baseline', "central");
          this.icon.setAttributeNS(null, 'text-anchor', "middle");
          this.icon.setAttributeNS(null, 'dominant-baseline', "central");
          switch (document.getElementById("card_layout").value) {
          case "left":
            if (this.this.refW / this.this.refH > 2) {
              this.icon.setAttributeNS(null, 'font-size', 0.8 * this.stnd);
              this.cap.setAttributeNS(null, 'font-size', 0.4 * this.stnd);
              this.subcap.setAttributeNS(null, 'font-size', 0.2 * this.stnd);
              this.cap.setAttributeNS(null, 'x', this.refX + this.stnd + 0.5 * (this.refW - this.stnd));
              this.cap.setAttributeNS(null, 'y', this.refY + 0.4 * this.refH);
              this.subcap.setAttributeNS(null, 'x', this.refX + this.stnd + 0.5 * (this.refW - this.stnd));
              this.subcap.setAttributeNS(null, 'y', this.refY + 0.7 * this.refH);
              this.icon.setAttributeNS(null, 'x', this.refX + 0.5 * this.stnd);
              this.icon.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
            }
            else {
              this.icon.setAttributeNS(null, 'font-size', 0.6 * this.stnd);
              this.cap.setAttributeNS(null, 'font-size', 0.3 * this.stnd);
              this.subcap.setAttributeNS(null, 'font-size', 0.15 * this.stnd);
              this.cap.setAttributeNS(null, 'x', this.refX + 0.75 * this.refW);
              this.cap.setAttributeNS(null, 'y', this.refY + 0.4 * this.refH);
              this.subcap.setAttributeNS(null, 'x', this.refX + 0.75 * this.refW);
              this.subcap.setAttributeNS(null, 'y', this.refY + 0.7 * this.refH);
              this.icon.setAttributeNS(null, 'x', this.refX + 0.25 * this.refW);
              this.icon.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
            }
            break;
          case "center":
            this.icon.setAttributeNS(null, 'font-size', 0.4 * this.stnd);
            this.cap.setAttributeNS(null, 'font-size', 0.15 * this.stnd);
            this.subcap.setAttributeNS(null, 'font-size', 0.1 * this.stnd);
            this.cap.setAttributeNS(null, 'x', this.refX + 0.5 * this.refW);
            this.cap.setAttributeNS(null, 'y', this.refY + 0.66 * this.refH);
            this.subcap.setAttributeNS(null, 'x', this.refX + 0.5 * this.refW);
            this.subcap.setAttributeNS(null, 'y', this.refY + 0.83 * this.refH);
            this.icon.setAttributeNS(null, 'x', this.refX + 0.5 * this.refW);
            this.icon.setAttributeNS(null, 'y', this.refY + 0.33 * this.refH);
          default:
            break;
          }
        }
        else {
          // Icon & Caption
          this.cap.setAttributeNS(null, 'font-weight', "bold");
          this.cap.setAttributeNS(null, 'text-anchor', "middle");
          this.cap.setAttributeNS(null, 'dominant-baseline', "central");
          this.icon.setAttributeNS(null, 'text-anchor', "middle");
          this.icon.setAttributeNS(null, 'dominant-baseline', "central");
          switch (cont.children.item(0).children.item(0).value) {
          case "left":
            if (this.refW / this.refH > 2) {
              this.icon.setAttributeNS(null, 'font-size', 0.8 * this.stnd);
              this.cap.setAttributeNS(null, 'font-size', 0.5 * this.stnd);
              this.cap.setAttributeNS(null, 'x', this.refX + this.stnd + 0.5 * (this.refW - this.stnd));
              this.cap.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
              this.icon.setAttributeNS(null, 'x', this.refX + 0.5 * this.stnd);
              this.icon.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
            }
            else {
              this.icon.setAttributeNS(null, 'font-size', 0.6 * this.stnd);
              this.cap.setAttributeNS(null, 'font-size', 0.3 * this.stnd);
              this.cap.setAttributeNS(null, 'x', this.refX + 0.75 * this.refW);
              this.cap.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
              this.icon.setAttributeNS(null, 'x', this.refX + 0.25 * this.refW);
              this.icon.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
            }
            break;
          case "center":
            this.icon.setAttributeNS(null, 'font-size', 0.4 * this.stnd);
            this.cap.setAttributeNS(null, 'font-size', 0.15 * this.stnd);
            this.cap.setAttributeNS(null, 'x', this.refX + 0.5 * this.refW);
            this.cap.setAttributeNS(null, 'y', this.refY + 0.75 * this.refH);
            this.icon.setAttributeNS(null, 'x', this.refX + 0.5 * this.refW);
            this.icon.setAttributeNS(null, 'y', this.refY + 0.4 * this.refH);
          default:
            break;
          }
        }
      }
      else {
        // Only icon
        this.icon.setAttributeNS(null, 'text-anchor', "middle");
        this.icon.setAttributeNS(null, 'dominant-baseline', "central");
        switch (cont.children.item(0).children.item(0).value) {
        case "left":
          this.icon.setAttributeNS(null, 'x', this.refX + 0.25 * this.refW);
          this.icon.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
          this.icon.setAttributeNS(null, 'font-size', 0.6 * this.stnd);
          break;
        case "center":
          this.icon.setAttributeNS(null, 'x', this.refX + 0.5 * this.refW);
          this.icon.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
          this.icon.setAttributeNS(null, 'text-anchor', "middle");
          this.icon.setAttributeNS(null, 'dominant-baseline', "central");
          this.icon.setAttributeNS(null, 'font-size', 0.8 * this.stnd);
        default:
          break;
        }
      }
    }
    else if (this.cap.innerHTML != "") {
      // Caption Only
      this.cap.setAttributeNS(null, 'font-size', 0.5 * this.stnd);
      this.cap.setAttributeNS(null, 'font-weight', "bold");
      this.cap.setAttributeNS(null, 'text-anchor', "middle");
      this.cap.setAttributeNS(null, 'dominant-baseline', "central");
      switch (cont.children.item(0).children.item(0).value) {
      case "left":
        this.cap.setAttributeNS(null, 'x', this.refX + 0.33 * this.refW);
        this.cap.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
        break;
      case "center":
        this.cap.setAttributeNS(null, 'x', this.refX + 0.5 * this.refW);
        this.cap.setAttributeNS(null, 'y', this.refY + 0.5 * this.refH);
      default:
        break;
      }
    }
    this.cap.setAttributeNS(null, 'font-family', "Helvetica,Arial");
    this.cap.setAttributeNS(null, 'fill', '#2B2B2B');
    //    console.log( "Value: "+document.getElementById("cap").list)
    this.group.appendChild(cap);
    this.subcap.setAttributeNS(null, 'font-family', "Helvetica,Arial");
    this.subcap.setAttributeNS(null, 'fill', '#2B2B2B');
    //    console.log( "Value: "+document.getElementById("cap").list)
    this.group.appendChild(this.subcap);
    var conts = document.getElementById("cardCont");
    this.icon.setAttributeNS(null, 'font-family', "FontAwesome");
    this.icon.setAttributeNS(null, 'fill', '#2B2B2B');
    this.group.appendChild(this.icon);
  }
  /**
   * @brief Paper Class
   */
var paper = function () {
  this.cards = [];
  this.k = 1;
  this.width = k * document.getElementById("paper_width").value;
  this.height = k * document.getElementById("paper_height").value;
  this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  this.svg.setAttributeNS(null, 'version', '1.1');
  this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  this.group.appendChild(rect);
  this.svg.appendChild(group);
};
paper.prototype.setUnit = function () {
  // Show Clock to debug
  var date_obj = new Date();
  console.log("minicord: " + date_obj.toString());
  // Get card size
  var ua = window.navigator.userAgent;
  if (ua.match(/Win/)) {
    var dpi = 96;
  }
  else {
    var dpi = 72;
  }
  var unit = document.getElementById("unit").value;
  var k = 1; // pt base
  switch (unit) {
  case "mm":
    k = 72 / 25.4; // 1pt = 1/72in = 25.4/72mm
    break;
  case "cm":
    k = 72 / 2.54; //1cm = 10mm
    break;
  case "in":
    k = 72; //1pt = 1/72in
    break;
  case "pt":
    k = 1;
    break;
  case "px":
    k = dpi / 72; // 1px = 1/72dpi
    break;
  }
  this.k = k;
}
paper.prototype.dispCard = function (i) {}
paper.prototype.applyCard = function () {
  var len = this.cards.length;
  var id = document.getElementById("card_id").value;
  if (id > len) {
    for (var i = len + 1; i = < id; i++) {
      var tmpCard = new card(0, 0, 1);
      this.cards.push(tmpCard);
      this.group.appendChild(this.cards[i]);
    }
  }
  this.cards[id].setContents();
}
paper.prototype.make = function () {
    var tagObj = document.getElementById("svg");
    tagObj.innerHTML = this.svg.outerHTML;
  }
  // Set up
mypaper = new paper;

function disp() {
  console.log("***Display***");
  console.log(mypaper);
}
//console.log("card maker 2");
//var mycard = new card();
//console.log(mycard.layout);
//mycard.layout = "left";
//console.log(mycard.layout);