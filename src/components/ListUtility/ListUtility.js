export function Mod(n, m) {
  return ((n % m) + m) % m;
}

export function Shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export function BuildList(a, b) {
  let list = [...a, ...b];
  return Shuffle(list);
}

export function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
