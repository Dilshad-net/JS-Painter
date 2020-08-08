window.addEventListener("load", () => {
  //console.log("hai");
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  const colorSelect = document.querySelector("#colorSelect");
  const linei = document.querySelector("#line");


  let painting = false;

  //resizing
  /*function resizeWin(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  }*/
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  //shapes
  /*context.fillRect();
  context.strokeRect();*/

  //functions
  function startPos(e) {
    painting = true;
    paint(e);
  }

  function endPos() {
    painting = false;
    context.beginPath();
  }

  function startLine(e) {
    painting = true;
    lineDraw(e);
  }
  function endLine() {
    painting = false;
  }

  //Colour(set)
  colorSelect.addEventListener("change", function(e) {
    context.stroke("ForeColor", false, e.fill.value);
  }, false);

  //Paint(draw)
  function paint(e) {
    if (!painting) return;
    context.lineWidth = 10;
    context.lineCap = 'round';
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }

  //line(straight)
    function lineDraw(e) {
      context.lineWidth = 10;
      context.lineCap = 'round';
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }

  //listners
  canvas.addEventListener('mousedown', startPos);
  canvas.addEventListener('mouseup', endPos);
  canvas.addEventListener('mousemove', paint);

    linei.addEventListener("click", lineDraw);

});

//window.addEventListener('resize', resizeWin());
