# AXT-func.js

綾急技研制作のJavaScript便利関数詰め合わせセットです。  
数行程度でかけたり、頻出したりする関数や定数などをまとめています。

なるべくワンライナーで書いているのでパクる参考になるかもしれません。

## バージョン

- このバージョン : `ver 2.0.0-beta.1`
- 最新のリリース : `ver 1.2.0`
- minify版バージョン : `ver 1.0.0`準拠

## 使い方

jsDelivrで`https://cdn.jsdelivr.net/gh/AyaExpTech/AXT-func.js@vX.Y.Z/AXT-func.js`で参照できます。  
`X`, `Y`, `Z`はバージョンに応じて変更してください。

バージョン表記はセマンティックバージョニングに準拠します。  
また、開発中のbeta版のバージョン表記は`ver X.Y.0-beta.N`とします。(Nは1スタートの自然数)

`$AXT`の中に全部詰め込んでます。  
詳しくはwikiを見ろ！そこにリファレンスは全部書く！

また、特定関数のみが欲しい場合はその行の関数をコピペしても良いかもしれません。  
なるべくワンライナー(1行)で書いているためコピーはしやすいはずです。

## 対応環境

- 最新のGoogle Chromeで検証しています。
- たぶんSafari, FirefoxとChromiumベースの諸ブラウザ(Edge, Operaなど)でも動きます。動かなかったら教えて下さい。
- Internet Explorerは死にました。対応するつもりなどありません。Edgeを使え。

## 利用規約

Author : AyaExpTech  
Licensed by "AeTOS for Everyone"

> https://axtech.dev/license/

## ver2.x 変更履歴

リリースバージョン単位です。  
ただし、最新のリリースバージョンのあとのβ版は記載します。

### ver 2.0.0 (2023-02-16)

- 関数名変更
    - `$AXT.getSerialArray(n, x)` - `[0, 1, 2]`のような(n〜xまでの値を含む)連番配列を返す。
    - `$AXT.getUniqueArray(...a)` - 引数から重複を削除して配列を返す。
    - `$AXT.getRandomWithinRange(a, b)` - a以上b未満の範囲で乱数を返す。
    - `$AXT.getDistance([p1x, p1y], [p2x, p2y])` - 平面上の2点間の距離を返す。
    - `$AXT.calcRoot(i, j=2)` - iのj乗根を返す。引数が1つの場合はiの平方根を返す。
    - `$AXT.calcQuadraticSolution(a, b, c)` - 二次方程式 ax²+bx+c=0 の実数解の配列を返す。
    - `$AXT.isPrime(n)` - nが素数であるかを返す。
    - `$AXT.isObject(i)` - iがObjectであるかを返す。
    - `$AXT.isPrimitive(i)` - iがPrimitiveであるかを返す。
    - `$AXT.isNullish(i)` - iがNullishであるかを返す。
    - `$AXT.isFalsy(i)` - iがFalsyであるかを返す。
    - `$AXT.isTruthy(i)` - iがTruthyであるかを返す。
    - `$AXT.isExistItem(f, ...i)` - 第1引数が第2引数以降のいずれかと合致するかを返す(存在チェック)。
    - `$AXT.sleep(s)` - 指定秒数待つ(awaitとともに使用)。
- 関数追加
    - `$AXT.copyToClipboard(s)` - 任意の文字列をクリップボードにコピーする。

<script src="https://cdn.jsdelivr.net/gh/AyaExpTech/AXT-func.js@v1.2.0/AXT-func.js"></script>
