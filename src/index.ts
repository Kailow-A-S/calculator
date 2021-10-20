import { create, all } from 'mathjs'
import { debug } from 'logger'
import { transpose } from './utils'

const search = (searchTerm: string, searchString: string) => {
  return searchString.search(searchTerm)
}

const vlookup = (searchTerm: any, matrix: { _data: (string | number | boolean)[][] }, column: any) => {
  const transposed = transpose(matrix._data)
  const row = transposed.find(col => col[0] == searchTerm)

  if (row) {
    if (column === 0) {
      return 0
    }
    const cell = row[column - 1]
    if (cell) {
      debug('Lookup:', searchTerm)
      debug('row', row)
      debug('Cell returned from vlookup:', cell)
      return cell
    }
  }
  return 0
}

const countif = (matrix: { _data: (string | number | boolean)[][] }, condition: any) => {
  let count = 0
  matrix._data.forEach(col => {
    col.forEach(row => {
      if (row == condition)
        count++
    })
  })
  return count
}

const debugPrint = (input: any) => {
  debug(input)
  return input
}

const math = create(all, {})

math.import!({
  search,
  vlookup,
  countif,
  debugPrint,
}, {})

export default math