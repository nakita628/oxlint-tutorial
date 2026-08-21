// import/no-self-import: 自分自身を import している
import { value } from './self-import.ts'

export const doubled = value * 2
export const value = 1
