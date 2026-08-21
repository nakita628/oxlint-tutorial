// DOM / Node.js API まわりの違反サンプル
import path from 'path'

export function nodeProtocol(): string {
  // unicorn/prefer-node-protocol: 'path' ではなく 'node:path'
  return path.sep
}

export function querySelector(): Element | null {
  // unicorn/prefer-query-selector: getElementById ではなく querySelector
  return document.getElementById('app')
}

export function domAppend(parent: Element, child: Element): void {
  // unicorn/prefer-dom-node-append: appendChild ではなく append
  parent.appendChild(child)
}

export function domRemove(node: Element): void {
  // unicorn/prefer-dom-node-remove: parentNode.removeChild ではなく remove()
  node.parentNode?.removeChild(node)
}

export function domTextContent(node: Element): string {
  // unicorn/prefer-dom-node-text-content: innerText ではなく textContent
  return (node as HTMLElement).innerText
}

export function domDataset(node: HTMLElement): string | null {
  // unicorn/prefer-dom-node-dataset: getAttribute('data-*') ではなく dataset
  return node.getAttribute('data-id')
}

export function modernDomApis(target: Element, sibling: Element): void {
  // unicorn/prefer-modern-dom-apis: insertAdjacentElement ではなく before/after
  target.insertAdjacentElement('beforebegin', sibling)
}

export function documentCookie(): void {
  // unicorn/no-document-cookie: document.cookie を直接書き換えない
  document.cookie = 'a=b'
}

export function keyboardEvent(): void {
  // unicorn/prefer-keyboard-event-key: keyCode ではなく key
  window.addEventListener('keydown', (event) => {
    void (event.keyCode === 13)
  })
}

export function globalThisAccess(): unknown {
  // unicorn/prefer-global-this: window ではなく globalThis
  return window
}

export function removeListener(target: EventTarget): void {
  // unicorn/no-invalid-remove-event-listener: 無名関数は解除できない
  target.removeEventListener('click', () => undefined)
}

export function fetchOptions(): Promise<Response> {
  // unicorn/no-invalid-fetch-options: GET に body は指定できない
  return fetch('/api', { method: 'GET', body: 'x' })
}

export function relativeUrl(): URL {
  // unicorn/relative-url-style: 相対 URL の書き方をそろえる
  return new URL('./foo', import.meta.url)
}

export function instanceofArray(value: unknown): boolean {
  // unicorn/no-instanceof-array: Array の判定は Array.isArray()
  return value instanceof Array
}

export function instanceofBuiltin(value: unknown): boolean {
  // unicorn/no-instanceof-builtins: 組み込み型の instanceof は避ける
  return value instanceof Map
}

export function typeofUndefined(value: unknown): boolean {
  // unicorn/no-typeof-undefined: typeof x === 'undefined' ではなく x === undefined
  return typeof value === 'undefined'
}

export function newForBuiltins(): unknown {
  // unicorn/new-for-builtins: Map / Set などは new を付ける
  return Object()
}

export function addEventListenerPreferred(target: HTMLElement): void {
  // unicorn/prefer-add-event-listener: onclick ではなく addEventListener
  target.onclick = (): void => undefined
}

export function classListToggle(target: HTMLElement, force: boolean): void {
  // unicorn/prefer-classlist-toggle: add / remove の分岐は toggle でまとめる
  if (force) {
    target.classList.add('active')
  } else {
    target.classList.remove('active')
  }
}

export function blobReading(blob: Blob): Promise<string> {
  // unicorn/prefer-blob-reading-methods: FileReader ではなく blob.text()
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      resolve(String(reader.result))
    })
    reader.readAsText(blob)
  })
}

export function responseJson(value: Record<string, number>): Response {
  // unicorn/prefer-response-static-json: new Response(JSON.stringify(...)) は Response.json()
  return new Response(JSON.stringify(value), {
    headers: { 'content-type': 'application/json' },
  })
}

export function postMessage(target: Window): void {
  // unicorn/require-post-message-target-origin: postMessage には targetOrigin を渡す
  target.postMessage('hello')
}

export function newBuffer(): Buffer {
  // unicorn/no-new-buffer: new Buffer は非推奨（Buffer.alloc / Buffer.from を使う）
  return new Buffer(10)
}

export function dateClone(date: Date): Date {
  // unicorn/consistent-date-clone: new Date(date.getTime()) は new Date(date)
  return new Date(date.getTime())
}

export function importMetaProperties(): string {
  // unicorn/prefer-import-meta-properties: import.meta.dirname を使う
  return path.dirname(import.meta.filename)
}

export function processExit(): void {
  // unicorn/no-process-exit: process.exit() ではなくエラーを投げる
  process.exit(1)
}
