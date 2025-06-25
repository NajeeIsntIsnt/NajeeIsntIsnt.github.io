$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(600, 200, 400, 10);
    createPlatform(100, 700, 600, 30);
    createPlatform(200, 600, 400, 30);
    createPlatform(300, 500, 300, 30);
    createPlatform(400, 400, 200, 30);
    createPlatform(500, 300, 100, 30);
    // TODO 3 - Create Collectables
    createCollectable("diamond", 1000, 50);
    createCollectable("kennedi", 900, 40);
    createCollectable("grace", 800, 30);
    // TODO 4 - Create Cannons
    createCannon("top", 900, 750);
    createCannon("left", 600, 2000);
    createCannon("right", 400, 2400);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
