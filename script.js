var gameTurn = 1;
var gameOver = false;


if (gameOver !== true) {
	if (gameTurn % 2 !== 0) {

		$("div").on("click", function() {
			$(this).addClass("p1");
			gameTurn++;
		});
	} else if (gameTurn % 2 === 0) {
		$("div").on("click", function() {
			$(this).addClass("p2");
			gameTurn++;
		})
	}
}