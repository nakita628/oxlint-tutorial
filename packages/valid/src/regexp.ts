// regexp.ts の適合版

export function regexLiteral(): RegExp {
  // prefer-regex-literals: 正規表現リテラルで書く
  return /abc/u
}

export function unicodeFlag(): RegExp {
  // require-unicode-regexp: u フラグを付ける
  return /abc/u
}

// no-control-regex: 制御文字を直接書かない
export function controlRegex(): RegExp {
  return /[a-z]/u
}

// no-invalid-regexp: 正しい正規表現を書く（prefer-regex-literals に従いリテラルで）
export function validRegexp(): RegExp {
  return /[a-z]/u
}

// no-empty-character-class: 中身のある文字クラスにする
export function characterClass(): RegExp {
  return /a[bc]d/u
}

// no-misleading-character-class: v フラグで書けば意図が明確になる
export function characterClassWithUnicode(): RegExp {
  return /^\p{Emoji_Presentation}$/u
}

// no-regex-spaces: 量指定子で書く
export function regexSpaces(): RegExp {
  return /a {3}b/u
}

// no-div-regex: 先頭のイコールは文字クラスに入れて区別しやすくする
export function divRegex(): RegExp {
  return /[=]foo/u
}

// prefer-named-capture-group: 名前付きキャプチャグループを使う
export function namedCaptureGroup(): RegExp {
  return /(?<year>\d{4})-(?<month>\d{2})/u
}

// no-useless-backreference: 意味のある後方参照だけを書く
// prefer-named-capture-group: キャプチャグループには名前を付ける
export function backreference(): RegExp {
  return /^(?<letter>a)\k<letter>$/u
}
