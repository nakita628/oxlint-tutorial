// 正規表現まわりの違反サンプル

export function regexLiteral(): RegExp {
  // prefer-regex-literals: 静的なパターンは RegExp コンストラクタではなくリテラルで
  return new RegExp('abc', 'u')
}

export function unicodeFlag(): RegExp {
  // require-unicode-regexp: u もしくは v フラグを必須にする
  return /abc/
}

// no-control-regex: 正規表現に制御文字を書かない
export function controlRegex(): RegExp {
  return /\x1f/u
}

// no-invalid-regexp: 構文として不正な正規表現
export function invalidRegexp(): RegExp {
  return new RegExp('[')
}

// no-empty-character-class: 何にもマッチしない空の文字クラス
export function emptyCharacterClass(): RegExp {
  return /a[]b/u
}

// no-misleading-character-class: サロゲートペアを文字クラスに入れている
export function misleadingCharacterClass(): RegExp {
  return /^[👍]$/
}

// no-regex-spaces: 連続スペースは量指定子で書く
export function regexSpaces(): RegExp {
  return /a   b/u
}

// no-div-regex: 除算と紛らわしい正規表現
export function divRegex(): RegExp {
  return /=foo/u
}

// prefer-named-capture-group: 名前付きキャプチャグループを使う
export function namedCaptureGroup(): RegExp {
  return /(\d{4})-(\d{2})/u
}

// no-useless-backreference: 常にマッチしない後方参照
export function uselessBackreference(): RegExp {
  return /^(?:(a)|\1b)$/u
}
