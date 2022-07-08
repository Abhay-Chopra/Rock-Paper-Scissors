function random(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

function computerPlay() {
  let option = random(0, 2);
  switch (option) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}
