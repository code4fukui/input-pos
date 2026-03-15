# input-pos
簡単なWebコンポーネントで、ポインティングデバイスの入力を2D座標で表示できます。

## デモ
https://code4fukui.github.io/input-pos/ で確認できます。

## 機能
- マウスやタッチ入力の2D座標を割合で表示
- 縦方向と横方向の入力を別々に表示できる
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