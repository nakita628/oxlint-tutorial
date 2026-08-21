// images-and-media.tsx の適合版

// jsx-a11y/alt-text: img には alt を付ける
export const WithAlt = (): JSX.Element => <img src="/a.png" alt="a cat sleeping" />

// jsx-a11y/img-redundant-alt: alt に「画像」「写真」などの語を入れない
export const GoodAlt = (): JSX.Element => <img src="/a.png" alt="a cat sleeping" />

// jsx-a11y/media-has-caption: video / audio には字幕トラックを付ける
export const WithCaption = (): JSX.Element => (
  <video src="/a.mp4">
    <track kind="captions" src="/a.vtt" srcLang="ja" label="日本語" />
  </video>
)

// jsx-a11y/iframe-has-title: iframe には title を付ける
export const WithIframeTitle = (): JSX.Element => <iframe src="/a.html" title="preview" />

// jsx-a11y/no-distracting-elements: marquee / blink は使わない
export const NotDistracting = (): JSX.Element => <div>moving</div>
