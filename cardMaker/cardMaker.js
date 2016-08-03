function fillsize() {
  console.log("OS: " + window.navigator.userAgent);
  var ua = window.navigator.userAgent;
  if (ua.match(/Win/)) {
    var dpi = 96;
  } else {
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
  if (rows.value * cols.value > card_id.children.length) {
    alert("Warning!: Max. of the number of cards is " + card_id.children.length + ".");
  }
  if (document.getElementById("multiple").checked) {
    card_id.style.display = "block";
    for (var i = 0; i < card_id.children.length; i++) {
      if (i < rows.value * cols.value) {
        card_id.children.item(i).style.display = "inline";
      } else {
        card_id.children.item(i).style.display = "none";
      }
    }
  } else {
    card_id.style.display = "none";
    document.getElementById("initial").checked = true;
    setId();
  }

  console.log("rows*cols: " + rows.value * cols.value);
  console.log("elm_u.disabled: " + elm_u.disabled);

}

function cardMake() {

  var isPrint = false;
  var isDownload = false;
  var isId = false;

  //  Read Flags
  for (var i = 0; i < arguments.length; i++) {
    console.log(i + ": " + arguments[i]);
    if (arguments[i] == "print") isPrint = true;
    if (arguments[i] == "download") isDownload = true;
    if (arguments[i] == "id") isId = true;
  }

  // Show Clock to debug
  var date_obj = new Date();
  console.log("toString: " + date_obj.toString());
  console.log("toISOString: " + date_obj.toISOString());

  var ua = window.navigator.userAgent;
  if (ua.match(/Win/)) {
    var dpi = 96;
  } else {
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

  // Get paper size
  var paper_width = k * document.getElementById("paper_width").value;
  var paper_height = k * document.getElementById("paper_height").value;

  console.log(paper_size.value + "paper: " + paper_width + " x " + paper_height + " pt, k: " + k);

  // Generate SVG image
  //http://qiita.com/niiyz/items/f790807cf30e9685a533
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttributeNS(null, 'version', '1.1');
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.setAttribute("width", paper_width + "pt");
  svg.setAttribute("height", paper_height + "pt");
  var viewBox = "0 0 " + paper_width + " " + paper_height;
  console.log("viewBox: " + viewBox);
  svg.setAttribute("viewBox", viewBox);

  var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  var paper = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  paper.setAttributeNS(null, 'x', 0);
  paper.setAttributeNS(null, 'y', 0);
  paper.setAttributeNS(null, 'width', paper_width);
  paper.setAttributeNS(null, 'height', paper_height);
  paper.setAttributeNS(null, 'stroke', '#1F1F21');
  paper.setAttributeNS(null, 'stroke-width', paper_width / 1000);
  paper.setAttributeNS(null, 'fill', 'none');


  var margin_x = k * document.getElementById("margin_x").value;
  var margin_y = k * document.getElementById("margin_y").value;
  console.log("margin:" + margin_x + ", " + margin_y);

  var card_width = k * document.getElementById("card_width").value;
  var card_height = k * document.getElementById("card_height").value;
  console.log("card size: " + card_width + "x" + card_height + unit);
  var rows = document.getElementById("card_rows").value;
  var cols = document.getElementById("card_cols").value;
  var cardMx = k * document.getElementById("cardMarginX").value;
  var cardMy = k * document.getElementById("cardMarginY").value;

  console.log("card matrix: " + rows + "x" + cols);

  var offset_x = 0.5 * paper_width - margin_x - 0.5 * card_width * cols - 0.5 * cardMx * (cols - 1);
  var offset_y = 0.5 * paper_height - margin_y - 0.5 * card_height * rows - 0.5 * cardMy * (rows - 1);
  var cards = [];

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var lx = margin_x + j * card_width + offset_x + j * cardMx;
      var ly = margin_y + i * card_height + offset_y + i * cardMy;
      if (document.getElementById("multiple").checked) {
        cards[i * cols + j] = layout(lx, ly, k, i * cols + j, isId);
      } else {
        cards[i * cols + j] = layout(lx, ly, k, 0, isId);
      }
      //            console.log(i*rows+j);
    }
    // more statements
  }

  var credit = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  credit.setAttributeNS(null, 'x', margin_x);
  credit.setAttributeNS(null, 'y', paper_height - 0.7 * margin_y);
  credit.setAttributeNS(null, 'font-size', paper_height / 100);
  //    text.setAttributeNS(null, 'font-family', "Times");
  credit.setAttributeNS(null, 'fill', '#2B2B2B');
  credit.innerHTML = "https://github.com/botamochi6277/botamochi6277.github.io/tree/master/cardMaker, " + date_obj.toString();

  group.appendChild(credit);
  group.appendChild(paper);

  if (!isPrint) {
    var draw = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    draw.setAttributeNS(null, 'x', margin_x);
    draw.setAttributeNS(null, 'y', margin_y);
    draw.setAttributeNS(null, 'width', paper_width - 2 * margin_x);
    draw.setAttributeNS(null, 'height', paper_height - 2 * margin_y);
    draw.setAttributeNS(null, 'stroke', '#1F1F21');
    draw.setAttributeNS(null, 'stroke-width', paper_width / 1000);
    draw.setAttributeNS(null, 'stroke-dasharray', paper_width / 100 + "," + paper_width / 100);
    draw.setAttributeNS(null, 'fill', 'none');
    group.appendChild(draw);
  }

  svg.appendChild(group);

  for (var i = 0; i < rows * cols; i++) {
    svg.appendChild(cards[i]);
  }
  var tagObj = document.getElementById("svg");
  tagObj.innerHTML = svg.outerHTML;

  if (isPrint) {
    //    window.location.href = "svg.html?" + escape(svg.outerHTML);
    document.getElementById("svgPrint").style.display = "block";
    document.getElementById("svgPrint").innerHTML = svg.outerHTML;
    document.getElementById("container").style.display = "none";

  }
  if (isDownload) {
    var header = "";
    downloadAsFile("botalab-card-" + date_obj.toISOString() + ".svg", header + svg.outerHTML);
  }
  //    document.write(svg.outerHTML);
  // 文字列として出力
  //    console.log(svg.outerHTML);

}

var downloadAsFile = function (fileName, content) {
  alert("You need to install FontAwesome and FontBotamochi")
  var blob = new Blob([content]);
  var url = window.URL || window.webkitURL;
  var blobURL = url.createObjectURL(blob);
  var a = document.createElement('a');
  a.download = fileName;
  a.href = blobURL;
  a.click();
}

function minicard() {
  // Show Clock to debug
  var date_obj = new Date();
  console.log("minicord: " + date_obj.toString());

  // Get card size
  var ua = window.navigator.userAgent;
  if (ua.match(/Win/)) {
    var dpi = 96;
  } else {
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
  var card_width = k * document.getElementById("card_width").value;
  var card_height = k * document.getElementById("card_height").value;
  console.log("card size: " + card_width + "x" + card_height);

  // Generate SVG image
  //http://qiita.com/niiyz/items/f790807cf30e9685a533
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttributeNS(null, 'version', '1.1');
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.setAttribute("width", card_width + "pt");
  svg.setAttribute("height", card_height + "pt");
  var viewBox = "0 0 " + card_width + " " + card_height;
  console.log("viewBox: " + viewBox);
  svg.setAttribute("viewBox", viewBox);

  var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  var paper = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  paper.setAttributeNS(null, 'x', 0);
  paper.setAttributeNS(null, 'y', 0);
  paper.setAttributeNS(null, 'width', card_width);
  paper.setAttributeNS(null, 'height', card_height);
  paper.setAttributeNS(null, 'stroke', '#1F1F21');
  paper.setAttributeNS(null, 'stroke-width', card_width / 500);
  paper.setAttributeNS(null, 'fill', 'none');

  var ids = document.getElementById("card_id");
  var card;
  for (var i = 0; i < ids.children.length; i++) {
    if (ids.children.item(i).children.item(0).checked) {
      card = layout(0, 0, k, i,true);
      break;
    }
  }

  group.appendChild(paper);

  svg.appendChild(group);
  svg.appendChild(card);

  var tagObj = document.getElementById("minicard");
  tagObj.innerHTML = svg.outerHTML;

}

function layout(local_x, local_y, k, id, isId) {
  //    console.log("layout: " + id)
  var cont = document.getElementById("cardCont").children.item(id);
  var card_width = k * Number(document.getElementById("card_width").value);
  var card_height = k * Number(document.getElementById("card_height").value);

  var card = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  var refW = 0;
  var refH = 0;
  var refX = 0;
  var refY = 0;
  var stnd;

  if (document.getElementById("elps").checked) {
    // Ellipse outline
    var outline = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    outline.setAttributeNS(null, 'cx', local_x + 0.5 * card_width);
    outline.setAttributeNS(null, 'cy', local_y + 0.5 * card_height);
    outline.setAttributeNS(null, 'rx', 0.5 * card_width);
    outline.setAttributeNS(null, 'ry', 0.5 * card_height);

    refW = 0.9 * card_width;
    refH = 0.9 * card_height;
    refX = local_x + 0.5 * (card_width - refW);
    refY = local_y + 0.5 * (card_height - refH);
    if (refW > refH) {
      stnd = refH;
    } else {
      stnd = refW;
    }

  } else if (document.getElementById("dmnd").checked) {
    var outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var d = "M " + (local_x) + " " + (local_y + 0.5 * card_height);
    d += " L " + (local_x + 0.5 * card_width) + " " + (local_y + card_height);
    d += " L " + (local_x + card_width) + " " + (local_y + 0.5 * card_height);
    d += " L " + (local_x + 0.5 * card_width) + " " + (local_y) + " z";
    outline.setAttributeNS(null, 'd', d);

    refW = 0.707 * card_width;
    refH = 0.707 * card_height;
    refX = local_x + 0.5 * (card_width - refW);
    refY = local_y + 0.5 * (card_height - refH);
    if (refW > refH) {
      stnd = refH;
    } else {
      stnd = refW;
    }
  } else if (document.getElementById("cpsl").checked) {

    refW = card_width;
    refH = card_height;
    refX = local_x;
    refY = local_y;
    if (refW > refH) {
      stnd = refH;
    } else {
      stnd = refW;
    }

    var outline = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    outline.setAttributeNS(null, 'x', local_x);
    outline.setAttributeNS(null, 'y', local_y);
    outline.setAttributeNS(null, 'width', card_width);
    outline.setAttributeNS(null, 'height', card_height);
    outline.setAttributeNS(null, 'rx', 0.5 * stnd);
    outline.setAttributeNS(null, 'ry', 0.5 * stnd);

  } else if (document.getElementById("hex").checked) {
    const PI = 3.14195;
    var outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var d = "M " + (local_x + 0.5 * card_width) + " " + (local_y);
    for (var i = 1; i < 6; i++) {
      d += " L " + (local_x + 0.5 * card_width - 0.5 * card_width * Math.sin(PI * i / 3)) + " " + (local_y + 0.5 * card_height - 0.5 * card_height * Math.cos(PI * i / 3));
    }

    d += " z";
    console.log(d);
    console.log(Math.sin(PI * 0.5));
    outline.setAttributeNS(null, 'd', d);

    refW = 0.9 * card_width;
    refH = 0.9 * card_height;
    refX = local_x + 0.5 * (card_width - refW);
    refY = local_y + 0.5 * (card_height - refH);
    if (refW > refH) {
      stnd = refH;
    } else {
      stnd = refW;
    }
  } else {

    refW = card_width;
    refH = card_height;
    refX = local_x;
    refY = local_y;
    if (refW > refH) {
      stnd = refH;
    } else {
      stnd = refW;
    }
    var outline = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    outline.setAttributeNS(null, 'x', local_x);
    outline.setAttributeNS(null, 'y', local_y);
    outline.setAttributeNS(null, 'width', card_width);
    outline.setAttributeNS(null, 'height', card_height);
  }

  //    console.log("stnd: "+stnd+ " " + local_x +"," + local_y);
  if (!document.getElementById("rect").checked && isId) {
    var ref = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    ref.setAttributeNS(null, 'x', refX); // 1/sqrt(2) = 1/1.41 = 0.707
    ref.setAttributeNS(null, 'y', refY);
    ref.setAttributeNS(null, 'width', refW);
    ref.setAttributeNS(null, 'height', refH);
    ref.setAttributeNS(null, 'stroke', 'red');
    ref.setAttributeNS(null, 'stroke-width', stnd / 500);
    ref.setAttributeNS(null, 'fill', 'none');
    ref.setAttributeNS(null, 'stroke-dasharray', card_width / 100 + "," + card_height / 50);
    card.appendChild(ref);
  }

  if (isId) {
    outline.setAttributeNS(null, 'stroke', 'blue');
  } else {
    outline.setAttributeNS(null, 'stroke', 'blue');
  }

  outline.setAttributeNS(null, 'stroke-width', stnd / 500);
  outline.setAttributeNS(null, 'fill', 'none');
  outline.setAttributeNS(null, 'stroke-dasharray', card_width / 100 + "," + card_height / 50);
  card.appendChild(outline);

  if (isId) {
    var card_id = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    card_id.setAttributeNS(null, 'text-anchor', "start");
    card_id.setAttributeNS(null, 'dominant-baseline', "text-before-edge");
    card_id.setAttributeNS(null, 'x', refX);
    card_id.setAttributeNS(null, 'y', refY);
    card_id.setAttributeNS(null, 'font-size', 0.1 * stnd);
    card_id.setAttributeNS(null, 'font-family', "Helvetica");
    card_id.setAttributeNS(null, 'fill', '#C7C7CC');
    card_id.innerHTML = id;
    card.appendChild(card_id);
  }

  var cap = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  var subcap = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  var icon = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  var card_layout;
  //  var listLyt = document.getElementById("cardLyt");

  cap.innerHTML = cont.children.item(1).value;
  subcap.innerHTML = cont.children.item(2).value;
  icon.innerHTML = cont.children.item(3).value;

  if (icon.innerHTML != "") {
    if (cap.innerHTML != "") {
      if (subcap.innerHTML != "") {
        // Full contents
        cap.setAttributeNS(null, 'font-weight', "bold");
        cap.setAttributeNS(null, 'text-anchor', "middle");
        cap.setAttributeNS(null, 'dominant-baseline', "central");
        subcap.setAttributeNS(null, 'text-anchor', "middle");
        subcap.setAttributeNS(null, 'dominant-baseline', "central");
        icon.setAttributeNS(null, 'text-anchor', "middle");
        icon.setAttributeNS(null, 'dominant-baseline', "central");
        switch (cont.children.item(0).children.item(0).value) {
        case "left":
          if (refW / refH > 2) {
            icon.setAttributeNS(null, 'font-size', 0.8 * stnd);
            cap.setAttributeNS(null, 'font-size', 0.4 * stnd);
            subcap.setAttributeNS(null, 'font-size', 0.2 * stnd);
            cap.setAttributeNS(null, 'x', refX + stnd + 0.5 * (refW - stnd));
            cap.setAttributeNS(null, 'y', refY + 0.4 * refH);
            subcap.setAttributeNS(null, 'x', refX + stnd + 0.5 * (refW - stnd));
            subcap.setAttributeNS(null, 'y', refY + 0.7 * refH);
            icon.setAttributeNS(null, 'x', refX + 0.5 * stnd);
            icon.setAttributeNS(null, 'y', refY + 0.5 * refH);
          } else {
            icon.setAttributeNS(null, 'font-size', 0.6 * stnd);
            cap.setAttributeNS(null, 'font-size', 0.3 * stnd);
            subcap.setAttributeNS(null, 'font-size', 0.15 * stnd);
            cap.setAttributeNS(null, 'x', refX + 0.75 * refW);
            cap.setAttributeNS(null, 'y', refY + 0.4 * refH);
            subcap.setAttributeNS(null, 'x', refX + 0.75 * refW);
            subcap.setAttributeNS(null, 'y', refY + 0.7 * refH);
            icon.setAttributeNS(null, 'x', refX + 0.25 * refW);
            icon.setAttributeNS(null, 'y', refY + 0.5 * refH);
          }
          break;
        case "center":
          icon.setAttributeNS(null, 'font-size', 0.4 * stnd);
          cap.setAttributeNS(null, 'font-size', 0.15 * stnd);
          subcap.setAttributeNS(null, 'font-size', 0.1 * stnd);
          cap.setAttributeNS(null, 'x', refX + 0.5 * refW);
          cap.setAttributeNS(null, 'y', refY + 0.66 * refH);
          subcap.setAttributeNS(null, 'x', refX + 0.5 * refW);
          subcap.setAttributeNS(null, 'y', refY + 0.83 * refH);
          icon.setAttributeNS(null, 'x', refX + 0.5 * refW);
          icon.setAttributeNS(null, 'y', refY + 0.33 * refH);
        default:
          break;

        }
      } else {
        // Icon & Caption
        cap.setAttributeNS(null, 'font-weight', "bold");
        cap.setAttributeNS(null, 'text-anchor', "middle");
        cap.setAttributeNS(null, 'dominant-baseline', "central");
        icon.setAttributeNS(null, 'text-anchor', "middle");
        icon.setAttributeNS(null, 'dominant-baseline', "central");
        switch (cont.children.item(0).children.item(0).value) {
        case "left":
          if (refW / refH > 2) {
            icon.setAttributeNS(null, 'font-size', 0.8 * stnd);
            cap.setAttributeNS(null, 'font-size', 0.5 * stnd);
            cap.setAttributeNS(null, 'x', refX + stnd + 0.5 * (refW - stnd));
            cap.setAttributeNS(null, 'y', refY + 0.5 * refH);
            icon.setAttributeNS(null, 'x', refX + 0.5 * stnd);
            icon.setAttributeNS(null, 'y', refY + 0.5 * refH);
          } else {
            icon.setAttributeNS(null, 'font-size', 0.6 * stnd);
            cap.setAttributeNS(null, 'font-size', 0.3 * stnd);
            cap.setAttributeNS(null, 'x', refX + 0.75 * refW);
            cap.setAttributeNS(null, 'y', refY + 0.5 * refH);
            icon.setAttributeNS(null, 'x', refX + 0.25 * refW);
            icon.setAttributeNS(null, 'y', refY + 0.5 * refH);
          }

          break;
        case "center":
          icon.setAttributeNS(null, 'font-size', 0.4 * stnd);
          cap.setAttributeNS(null, 'font-size', 0.15 * stnd);
          cap.setAttributeNS(null, 'x', refX + 0.5 * refW);
          cap.setAttributeNS(null, 'y', refY + 0.75 * refH);
          icon.setAttributeNS(null, 'x', refX + 0.5 * refW);
          icon.setAttributeNS(null, 'y', refY + 0.4 * refH);
        default:
          break;

        }
      }
    } else {
      // Only icon
      icon.setAttributeNS(null, 'text-anchor', "middle");
      icon.setAttributeNS(null, 'dominant-baseline', "central");
      switch (cont.children.item(0).children.item(0).value) {
      case "left":
        icon.setAttributeNS(null, 'x', refX + 0.25 * refW);
        icon.setAttributeNS(null, 'y', refY + 0.5 * refH);
        icon.setAttributeNS(null, 'font-size', 0.6 * stnd);
        break;
      case "center":
        icon.setAttributeNS(null, 'x', refX + 0.5 * refW);
        icon.setAttributeNS(null, 'y', refY + 0.5 * refH);
        icon.setAttributeNS(null, 'text-anchor', "middle");
        icon.setAttributeNS(null, 'dominant-baseline', "central");
        icon.setAttributeNS(null, 'font-size', 0.8 * stnd);
      default:
        break;

      }
    }
  } else if (cap.innerHTML != "") {
    // Caption Only
    cap.setAttributeNS(null, 'font-size', 0.5 * stnd);
    cap.setAttributeNS(null, 'font-weight', "bold");
    cap.setAttributeNS(null, 'text-anchor', "middle");
    cap.setAttributeNS(null, 'dominant-baseline', "central");
    switch (cont.children.item(0).children.item(0).value) {
    case "left":
      cap.setAttributeNS(null, 'x', refX + 0.33 * refW);
      cap.setAttributeNS(null, 'y', refY + 0.5 * refH);
      break;
    case "center":
      cap.setAttributeNS(null, 'x', refX + 0.5 * refW);
      cap.setAttributeNS(null, 'y', refY + 0.5 * refH);
    default:
      break;
    }
  }


  cap.setAttributeNS(null, 'font-family', "Helvetica,Arial");
  cap.setAttributeNS(null, 'fill', '#2B2B2B');
  //    console.log( "Value: "+document.getElementById("cap").list)
  card.appendChild(cap);

  subcap.setAttributeNS(null, 'font-family', "Helvetica,Arial");
  subcap.setAttributeNS(null, 'fill', '#2B2B2B');
  //    console.log( "Value: "+document.getElementById("cap").list)
  card.appendChild(subcap);

  var conts = document.getElementById("cardCont");
  icon.setAttributeNS(null, 'font-family', conts.children.item(id).children.item(3).style.fontFamily);
  icon.setAttributeNS(null, 'fill', '#2B2B2B');

  card.appendChild(icon);

  return card;
}

function setId() {

  var ids = document.getElementById("card_id");
  var conts = document.getElementById("cardCont");

  var rows = document.getElementById("card_rows");
  var cols = document.getElementById("card_cols");
  console.log("n: " + rows.value * cols.value);
  console.log("length: " + card_id.children.length);

  for (var i = 0; i < ids.children.length; i++) {
    conts.children.item(i).children.item(3).style.fontFamily = conts.children.item(i).children.item(4).children.item(0).value;
    if (ids.children.item(i).children.item(0).checked) {
      //            console.log("checked id: " +i+", " + ids.children.item(i).innerHTML);
      conts.children.item(i).style.display = "block";
    } else {
      conts.children.item(i).style.display = "none";
    }

  }

  console.log("iconFont: " + conts.children.item(0).children.item(3).style.fontFamily);
  console.log("iconFont: " + conts.children.item(0).children.item(4).children.item(0).value);
  conts.children.item(0).children.item(3).style.fontFamily = conts.children.item(0).children.item(4).children.item(0).value;

}

function zero_str(n, d) {
  var m;
  m = n.toString(10);
  while (m.length < d) {
    m = "0" + m;
  }
  return m;
}

function getCard() {
  var data = location.search.substring(1, location.search.length);
  data = unescape(data);
  document.getElementById("svg").innerHTML = data;
}

function revail() {
  console.log(document.getElementById("container").style.display);
  document.getElementById("container").style.display = "block";
  document.getElementById("svgPrint").style.display = "none";
}

//
//function test() {
//  for (var i = 0; i < arguments.length; i++) {
//    console.log(i + ": " + arguments[i]);
//
//  }
//}
//test("First", "Second", "Third", "Fourth", "Fifth", "Hex");