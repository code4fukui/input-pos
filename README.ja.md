# input-pos
`<input-pos>` は、ポインティングデバイスの入力を 2D 座標で表示できる Web コンポーネントです。

## デモ
https://code4fukui.github.io/input-pos/ で動作例を確認できます。

## 機能
- マウスやタッチ入力の 2D 座標を 0.0 ～ 1.0 の範囲で表示
- 縦方向と横方向の入力を別々に表示可能
- 複数のインスタンスを設置可能

## 使い方
HTML に `<input-pos>` タグを追加するだけで、ポインティングデバイスの入力を表示できます。
JavaScript から `oninput` イベントで入力値を取得することもできます。

```html
<input-pos class=vertical id="ip1"></input-pos>
<script type="module">
  ip1.oninput = () => {
    console.log(ip1.value);
  };
</script>
```

## ライセンス
MIT License