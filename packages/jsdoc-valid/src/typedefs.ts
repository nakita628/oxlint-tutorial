// typedefs.ts の適合版

/**
 * ユーザー。
 * @typedef {object} User
 * @property {string} id 識別子
 */
export type User = { id: string }

/**
 * 記事。
 * @typedef {object} Article
 * @property {string} id 識別子
 */
export type Article = { id: string }

/**
 * タグ。
 * @typedef {object} Tag
 * @property {string} name 名前
 */
export type Tag = { name: string }

/**
 * カテゴリ。
 * @typedef {object} Category
 * @property {string} name 名前
 */
export type Category = { name: string }

/**
 * 設定。
 * @typedef {object} Settings
 * @property {string} theme テーマ名
 */
export type Settings = { theme: string }
