const $AXT = {
    "getSerialArray": (n, x) => [...Array(x - n + 1).keys()].map(i => i + n),
    "getUniqueArray": (...a) => Array.from(new Set(a)),
    "getRandomWithinRange": (a, b) => a + Math.random() * (b - a),
    "getDistance": (p1, p2) => Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2),
    "calcRoot": (i, j = 2) => i ** (1 / j),
    "calcQuadraticSolution": (a, b, c) => [
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
    "isPrime": n => Math.pow(2, n - 1) % n == 1,
    "isObject": i => !!i && typeof i === 'object',
    "isPrimitive": i => !i || typeof i !== 'object',
    "isNullish": i => i == null,
    "isFalsy": i => !i,
    "isTruthy": i => !!i,
    "isExistItem": (f, ...i) => i.includes(f),
    "sleep": s => new Promise(resolve => setTimeout(resolve, 1000 * s)),
    /* v2.0.0追加 */
    "copyToClipboard": s => navigator.clipboard.writeText(s),
    /* v2.1.0追加 */
    "copyObj": o => JSON.parse(JSON.stringify(o))
};