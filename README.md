# AXT-func.js

綾急技研制作のJavaScript便利関数詰め合わせセットです。  
数行程度でかけたり、頻出したりする関数や定数などをまとめています。

## バージョン

- このバージョン : `ver 1.0.1`
- 最新のリリース : `ver 1.0.0`

## 使い方

忘れてなければver1.0.0以降はjsDelivrに登録してるはずなので、`https://cdn.jsdelivr.net/gh/AyaExpTech/AXT-func.js@vX.Y.Z/AXT-func.js`でいけると思います。  
`X`, `Y`, `Z`はバージョンに応じて変更してください。

開発中のbeta版は`ver X.Y.0-beta.N`としてください。Nは1スタートの自然数。

`$AXT`の中に全部詰め込んでます。  
詳しくはwikiを見ろ！そこにリファレンスは全部書く！

## 規約

Author : 綾急技研 (AyaExpTech)   
Licensed by "AeTOS(Type-06)"

![img](license-support.png)

## 変更履歴

リリースバージョン単位です。  
ただし、最新のリリースバージョンのあとのβ版は記載します。

### ver 1.0.1 (2022-01-12)

- README.mdの修正
    - 日付間違えてました

### ver 1.0.0 (2022-01-12)

- minify版の追加
    - 毎回追加するとは限りません。更新時には変更履歴に記述します。
    - 概ねセマンティックバージョニングのマイナーバージョン(Y)更新ごとに対応する……と思います。気分です。
- 関数追加
    - $AXT.is.nullish - nullish(nullかundefined)か判定する
    - $AXT.func.sleep - awaitとともに使って指定秒数実行を止める。

### ver 0.9.1 (2022-01-12)

- 関数追加
    - $AXT.get.serialArray - `[0, 1, 2]`みたいな連番配列の生成。
    - $AXT.math.distance - 平面上2点間の直線距離を求める。
    - $AXT.is.object - 値がオブジェクトか判定する。
    - $AXT.is.primitive - 値がプリミティブか判定する。
    - $AXT.is.falsy - 値がfalsyか判定する。
    - $AXT.is.truthy - 値がtruthyか判定する。
    - $AXT.is.existItem - 指定した値が別に指定した値一覧のいずれかと一致するか判定する。

### ver 0.9.0 (2022-01-12)

- リポジトリを作成