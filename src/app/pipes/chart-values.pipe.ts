import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chartValues'
})
export class ChartValuesPipe implements PipeTransform {
  transform(value: Array<{ x: number, y: number }>, ...args: unknown[]): unknown {
    return value.map(valueObj => {
      const newVals: any  = Object.values(valueObj)
      const time: Date = new Date(newVals[0] * 1000)
      newVals[0] = time
      return newVals
    })
  }
}


// getDataValsForChart(dataVals: Array<{ x: number, y: number }>) {
//   return dataVals.map(value => {
//     const newVals: any = Object.values(value)
//     const time: Date = new Date(newVals[0] * 1000)
//     newVals[0] = time
//     return newVals
//   })
// }

