// победные комбинации
export const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

// проверка победителя
export function isWinner(field) {
  for (const [a, b, c] of WIN_PATTERNS) {
    if (field[a] && field[a] === field[b] && field[a] === field[c]) {
      return field[a]
    }
  }
  return null
}

// проверка на ничью
export function isDraw(field) {
  let countCell = 0

  for (const cell of field) {
    if (cell !== "") countCell++
  }

  if (countCell === 9) return true
}
