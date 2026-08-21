// @typedef / @property まわりの違反サンプル

/**
 * ユーザー。
 * @typedef {object} User
 */
// jsdoc/require-property: @typedef {object} なのに @property が無い
export type User = { id: string }

/**
 * 記事。
 * @typedef {object} Article
 * @property {string}
 */
// jsdoc/require-property-name: @property に名前が無い
export type Article = { id: string }

/**
 * タグ。
 * @typedef {object} Tag
 * @property name
 */
// jsdoc/require-property-type: @property に型が無い
export type Tag = { name: string }

/**
 * カテゴリ。
 * @typedef {object} Category
 * @property {string} name
 */
// jsdoc/require-property-description: @property に説明が無い
export type Category = { name: string }

/**
 * 設定。
 * @typedef {object} Settings
 * @property {string} missing.inner 親が定義されていないネストプロパティ
 * @property {string} theme テーマ
 * @property {string} theme 重複した @property
 */
// jsdoc/check-property-names: 親の無いパスと、重複した @property
export type Settings = { theme: string }
