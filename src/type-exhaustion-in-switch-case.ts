enum Color {
  Red,
  Green,
  Blue
}

function getColorName(color: Color): string {
  // If I delete a color typescript will complain with Argument of type 'c' not assignable to 'never'
  switch(color) {
    case Color.Red:
      return 'red, red wine';
    case Color.Green:
      return 'greenday';
    case Color.Blue:
      return "Im blue, daba dee daba";
    default:
      throw color satisfies never;
  }
}