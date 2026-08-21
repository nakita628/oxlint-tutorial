// 名前順に import を並べる（sort-imports）
import { compute } from './naming.ts'
import { pickLabel } from './ternary.ts'

// オブジェクトのキーを名前順に並べる（sort-keys）
const alphaValue = 2
const zoomValue = 1

export const settings = {
  alpha: alphaValue,
  zoom: zoomValue,
}

export const used = { compute, pickLabel }
