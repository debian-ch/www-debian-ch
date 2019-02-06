// T for T-shirts
var T = {
  classic: {
	XL: 0,
	L: 3,
	M: 3,
	S: 3,
	XS: 0
  },
  fusion: {
	XL: 0,
	L: 0,
	M: 0,
	S: 0,
	XS: 0
  },
  anarchism: {
	XL: 0,
	L: 0,
	M: 0,
	S: 0,
	XS: 0
  },
  spacefun: {
	XL: 0,
	L: 0,
	M: 0,
	S: 0,
	XS: 0
  }
}

// U for umbrellas
var U = {
  black: 66,
  white: 0
}

// K_ for knives
var K = {
//  cybertool: {
    black: 0, // 14 is the supposed stock, minus DebConf15 sales
    blue: 0 // 4 is the supposed stock, minus DebConf15 sales
//  },
// We don't have Nomad's anymore
}

// S_ for stickers
var S = {
  swirl: {
	L: 0,	// Large no moar
	M: 0,
	S: 0,	// 31x40
	XS: 0,
  },
  women: {
	L: 0, // 120x170
	M: 0, // Message-Id: <42AE6527-DC3A-4E26-8287-C9193D97541D@gmail.com> was interested in getting some of these.
	S: 57,	// A: 31x45
	XS: 22,	// A: 30x42
  },
  horned: {
	L: 0,
	M: 0,
	S: 0,	// 38x40
	XS: 12, // 30x32
  },
  word_white: {
	L: 0,
	M: 0,
	S: 43,  // B
  },
  word_black: {
	L: 0,
	M: 0,
	S: 42, // C
  }
}

// Now display all of these numbers smartly
var T_full_stock_str = "";
for(var T_design in T) {
  var T_stock_str = "";
  for (var size in T[T_design]) {
    var stock = T[T_design][size];
    if ( stock != 0 ) {
      T_stock_str += size + ": " + stock + "<br />";
    }
  }
  field = document.getElementById("T_" + T_design);
  if ( field != null ) {
    field.innerHTML = T_stock_str;
    // If the stock is empty for the category, empty the full line
    if ( T_stock_str.length == 0 ) {
      field.parentNode.innerHTML = "";
    }
  }
  T_full_stock_str += T_stock_str;
}
if ( T_full_stock_str.length == 0 ) {
  field = document.getElementById("tshirts-whole");
  if ( field != null ) { field.innerHTML = ""; }
}

// Stickers
for(var S_design in S) {
  var S_stock_str = "";
  for (var size in S[S_design]) {
    var stock = S[S_design][size];
    field = document.getElementById("S_" + S_design + "_" + size);
    if ( field != null ) {
      field.innerHTML = stock;
    }
  }
}

// Umbrellas
var U_stock_str = "";
var field;
for(var U_color in U) {
  var stock = U[U_color];
  // Display it nevertheless
  field = document.getElementById("U_" + U_color);
  if ( field != null ) { field.innerHTML = stock; }
  if ( stock != 0 ) {
    U_stock_str += U_color + ": " + stock + "<br />";
  }
}
// If the stock is empty for the category, remove the full block
if ( U_stock_str.length == 0 ) {
  field = document.getElementById("umbrellas-whole");
  if ( field != null ) { field.innerHTML = ""; }
}

// Knives
var K_stock_str = "";
var field;
for(var K_color in K) {
  var stock = K[K_color];
  // Display it nevertheless
  field = document.getElementById("K_" + K_color);
  field.innerHTML = stock;
  if ( stock != 0 ) {
    K_stock_str += K_color + ": " + stock + "<br />";
  }
}
// If the stock is empty for the category, remove the full block
if ( K_stock_str.length == 0 ) {
  field = document.getElementById("knives-whole");
  field.innerHTML = "";
}
