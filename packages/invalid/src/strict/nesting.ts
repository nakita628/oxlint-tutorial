// max-nested-callbacks: callbacks are nested too deeply here.
export const runAll = (items: Array<number>): void => {
  items.forEach((one) => {
    items.forEach((two) => {
      items.forEach((three) => {
        void (one + two + three)
      })
    })
  })
}
