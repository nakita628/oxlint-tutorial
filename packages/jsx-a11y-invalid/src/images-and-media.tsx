// 画像・メディアまわりのアクセシビリティ違反サンプル

// jsx-a11y/alt-text: img には alt を付ける
export const NoAlt = (): JSX.Element => <img src="/a.png" />

// jsx-a11y/img-redundant-alt: alt に「画像」「写真」などの語を入れない
export const RedundantAlt = (): JSX.Element => <img src="/a.png" alt="Photo of a cat" />

// jsx-a11y/media-has-caption: video / audio には字幕トラックを付ける
export const NoCaption = (): JSX.Element => <video src="/a.mp4" />

// jsx-a11y/iframe-has-title: iframe には title を付ける
export const NoIframeTitle = (): JSX.Element => <iframe src="/a.html" />

// jsx-a11y/no-distracting-elements: marquee / blink は使わない
export const Distracting = (): JSX.Element => <marquee>moving</marquee>
