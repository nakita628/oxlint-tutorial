// 数値には名前を付ける（no-magic-numbers）
const retryLimit = 3
const secondsPerDay = 86400

export const retryWindow = retryLimit * secondsPerDay
