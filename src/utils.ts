export const transpose = <T>(matrix: T[][]) => {
  return matrix[0].map((_, c) => matrix.map(r => r[c]))
}
