export type Counter = { value: number }

export function increment(counter: Counter): Counter {
  return { value: counter.value + 1 }
}
