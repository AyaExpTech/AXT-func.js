const $AXT = {

    // "AXT-func.js" by AyaExpTech
    // https://github.com/AyaExpTech/AXT-func.js

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // get : 頻出しそうなものを生成する系メソッド

    "get": {
        /**
         * $AXT.get.serialArray() - `[0, 1, 2]`みたいな連番配列の生成。
         * @param {Number} n - 連番配列の最小値
         * @param {Number} x - 連番配列の最大値
         * @returns {Array} - nからxまでのすべての整数を含む連番配列
         */
        "serialArray": (n, x) => [...Array(x - n + 1).keys()].map(i => i + n),
        /**
         * $AXT.get.uniqueArray() - 引数から重複を削除した配列を返します。スプレット構文でArrayのuniqueにも使えます。
         * @param {...any} a - 値's。
         * @returns {Array} - 引数から重複を削除したものの配列。
         */
        "uniqueArray": (...a) => Array.from(new Set(a)),
        /**
         * $AXT.get.random() - 範囲内のランダムな数を返します。小数を含み、a以上b未満です。
         * @param {Number} a - 最小値
         * @param {Number} b - 最大値
         * @returns {Number} - 乱数
         */
        "random": (a, b) => a + Math.random() * (b - a)
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // math : 数学系演算で頻出しそうなメソッド

    "math": {
        /**
         * $AXT.math.distance() - 平面上2点間の直線距離を求める。
         * @param {[Number, Number]} p1 - 1点目の座標(x, y)
         * @param {[Number, Number]} p2 - 2点目の座標(x, y)
         * @returns {Number} - 2点間の距離
         */
        "distance": (p1, p2) => Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2),
        /**
         * $AXT.math.root() - iのj乗根を計算します。jの指定がない場合はiの平方根を計算します。
         * @param {Number} i
         * @param {Number} [j=2]
         * @returns {Number} - iのj乗根
         */
        "root": (i, j = 2) => i ** (1 / j),
        /**
         * $AXT.math.quadratic() - 二次方程式 ax²+bx+c=0 の実数解をすべて求めます。
         * @param {Number} a 
         * @param {Number} b 
         * @param {Number} c 
         * @returns {Array[Number]} - 実数解すべて。実数解がない場合length=0、重解の場合length=1
         */
        "quadratic": (a, b, c) => [
            (
                (b ** 2 - 4 * a * c) >= 0
                    ? (-b + (b ** 2 - 4 * a * c) ** 0.5) / (2 * a)
                    : null
            ),
            (
                (b ** 2 - 4 * a * c) > 0
                    ? (-b - (b ** 2 - 4 * a * c) ** 0.5) / (2 * a)
                    : null
            )
        ].filter(v => v != null),
        /**
         * $AXT.math.isPrime - 素数か判定する。
         * ($AXT.is.primeと同じ)
         * @param {Number} n - 素数判定する値
         * @returns {Boolean} - 素数ならtrue
         */
        "isPrime": n => Math.pow(2, n - 1) % n == 1
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // is : 〇〇であるか判定する系統のメソッド

    "is": {
        /**
         * $AXT.is.object() - 値がオブジェクトか判定する。
         * @param {Any} i - 判定する値
         * @returns {Boolean}
         */
        "object": i => !!i && typeof i === 'object',
        /**
         * $AXT.is.primitive() - 値がプリミティブか判定する。
         * @param {Any} i - 判定する値
         * @returns {Boolean}
         */
        "primitive": i => !i || typeof i !== 'object',
        /**
         * $AXT.is.falsy() - 値がfalsyか判定する。
         * @param {Any} i - 判定する値
         * @returns {Boolean}
         */
        "falsy": i => !i,
        /**
         * $AXT.is.truthy() - 値がtruthyか判定する。
         * @param {Any} i - 判定する値
         * @returns {Boolean}
         */
        "truthy": i => !!i,
        /**
         * $AXT.is.existItem() - 指定した値が別に指定した値一覧のいずれかと一致するか判定する。
         * @param {Any} f - 検索する値。Primitive限定と思ったほうがいい
         * @param  {...any} i - 第2引数以降は条件となる値を羅列する。配列に入れてたなら残余引数構文で展開。
         * @returns 
         */
        "existItem": (f, ...i) => i.includes(f),
        /**
         * $AXT.is.nullish() - nullish(nullかundefined)か判定する
         * @param {Any} i - 判定する値
         * @returns {Boolean}
         */
        "nullish": i => i == null,
        /**
         * $AXT.is.prime() - 素数か判定する。
         * ($AXT.math.isPrimeと同じ)
         * @param {Number} n - 素数判定する値
         * @returns {Boolean} - 素数ならtrue
         */
        "prime": n => Math.pow(2, n - 1) % n == 1
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // func : カテゴリー分類のない便利関数

    "func": {
        /**
         * $AXT.func.sleep() - awaitとともに使って指定秒数実行を止める。
         * @param {Number} s - 待つ秒数(ミリ秒ではなく秒)
         * @returns {Undefined}
         */
        "sleep": s => new Promise(resolve => setTimeout(resolve, 1000 * s))
    }

}