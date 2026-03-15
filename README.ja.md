# input-pos
簡単にポインティングデバイスの入力を表示する Web コンポーネント。

## デモ
https://code4fukui.github.io/input-pos/ で動作確認できます。

## 機能
- マウスやタッチ入力を受け付けて、割合で座標を表示
- 縦方向と横方向の入力を表示できる
- 複数のインスタンスを設置できる

## 使い方
HTML に `<input-pos>` タグを書くだけで、ポインティングデバイスの入力を表示できます。
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