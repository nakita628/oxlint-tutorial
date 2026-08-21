// dom-and-node.ts の適合版
import path from 'node:path'

export function nodeProtocol(): string {
  // unicorn/prefer-node-protocol: 'node:path' を使う
  return path.sep
}

export function querySelector(): Element | undefined {
  // unicorn/prefer-query-selector: querySelector を使う
  return document.querySelector('#app') ?? undefined
}

export function domAppend(parent: Element, child: Element): void {
  // unicorn/prefer-dom-node-append: append を使う
  parent.append(child)
}

export function domRemove(node: Element): void {
  // unicorn/prefer-dom-node-remove: remove() を使う
  node.remove()
}

export function domTextContent(node: Element): string {
  // unicorn/prefer-dom-node-text-content: textContent を使う
  return node.textContent ?? ''
}

export function domDataset(node: HTMLElement): string | undefined {
  // unicorn/prefer-dom-node-dataset: dataset を使う
  return node.dataset.id
}

export function modernDomApis(target: Element, sibling: Element): void {
  // unicorn/prefer-modern-dom-apis: before() を使う
  target.before(sibling)
}

export function documentCookie(value: string): void {
  // unicorn/no-document-cookie: Cookie Store API を使う
  void (globalThis as { cookieStore?: { set: (v: string) => void } }).cookieStore?.set(value)
}

export function keyboardEvent(): void {
  // unicorn/prefer-keyboard-event-key: key を使う
  globalThis.addEventListener('keydown', (event) => {
    void ((event as KeyboardEvent).key === 'Enter')
  })
}

export function globalThisAccess(): unknown {
  // unicorn/prefer-global-this: globalThis を使う
  return globalThis
}

export function removeListener(target: EventTarget, listener: () => void): void {
  // unicorn/no-invalid-remove-event-listener: 同じ関数参照を渡す
  target.removeEventListener('click', listener)
}

export function fetchOptions(): Promise<Response> {
  // unicorn/no-invalid-fetch-options: body を付けるなら POST
  return fetch('/api', { method: 'POST', body: 'x' })
}

export function relativeUrl(): URL {
  // unicorn/relative-url-style: 先頭の './' を付けない
  return new URL('foo', import.meta.url)
}

export function isArrayValue(value: unknown): boolean {
  // unicorn/no-instanceof-array: Array.isArray() を使う
  return Array.isArray(value)
}

export function isMapValue(value: unknown): boolean {
  // unicorn/no-instanceof-builtins: 型ガードは別の方法で行う
  return Object.prototype.toString.call(value) === '[object Map]'
}

export function typeofUndefined(value: unknown): boolean {
  // unicorn/no-typeof-undefined: 直接比較する
  return value === undefined
}

export function newForBuiltins(): unknown {
  // unicorn/new-for-builtins: Object() ではなくリテラルを使う
  return {}
}

export function addEventListenerPreferred(target: HTMLElement, listener: () => void): void {
  // unicorn/prefer-add-event-listener: addEventListener を使う
  target.addEventListener('click', listener)
}

export function classListToggle(target: HTMLElement, force: boolean): void {
  // unicorn/prefer-classlist-toggle: toggle でまとめる
  target.classList.toggle('active', force)
}

export function blobReading(blob: Blob): Promise<string> {
  // unicorn/prefer-blob-reading-methods: blob.text() を使う
  return blob.text()
}

export function responseJson(value: Record<string, number>): Response {
  // unicorn/prefer-response-static-json: Response.json() を使う
  return Response.json(value)
}

export function postMessage(target: Window): void {
  // unicorn/require-post-message-target-origin: targetOrigin を渡す
  target.postMessage('hello', '*')
}

export function allocBuffer(): Buffer {
  // unicorn/no-new-buffer: Buffer.alloc() を使う
  return Buffer.alloc(10)
}

export function dateClone(date: Date): Date {
  // unicorn/consistent-date-clone: new Date(date) と書く
  return new Date(date)
}

export function importMetaProperties(): string {
  // unicorn/prefer-import-meta-properties: import.meta.dirname を使う
  return import.meta.dirname
}

export function processExit(): never {
  // unicorn/no-process-exit: エラーを投げて呼び出し側に任せる
  throw new Error('fatal')
}
