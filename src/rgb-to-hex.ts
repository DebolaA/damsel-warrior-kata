export function convertToHexadecimal(r: number, g: number, b: number): string {
  //check inputs are of correct data type
  //   if (r % 1 !== 0 || g % 1 !== 0 || b % 1 !== 0)
  //     throw new Error("Input values should be numbers only");

  if (r > 255) r = 255;
  if (r < 0) r = 0;
  if (r % 1 !== 0) r = Math.round(r);

  if (g > 255) g = 255;
  if (g < 0) g = 0;
  if (g % 1 !== 0) g = Math.round(g);

  if (b > 255) b = 255;
  if (b < 0) b = 0;
  if (b % 1 !== 0) b = Math.round(b);

  //convert here
  let result: string = "";

  const red =
    r.toString(16).toUpperCase().length === 1
      ? `0${r.toString(16).toUpperCase()}`
      : r.toString(16).toUpperCase();
  const green =
    g.toString(16).toUpperCase().length === 1
      ? `0${g.toString(16).toUpperCase()}`
      : g.toString(16).toUpperCase();
  const blue =
    b.toString(16).toUpperCase().length === 1
      ? `0${b.toString(16).toUpperCase()}`
      : b.toString(16).toUpperCase();

  return `${red}${green}${blue}`;
}
