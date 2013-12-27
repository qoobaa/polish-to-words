(function () {
    var HUNDREDS = ["", " sto ", " dwieście ", " trzysta ", " czterysta ", " pięćset ", " sześćset ", " siedemset ", " osiemset ", " dziewięćset "],
        TENS = ["", " dziesięć ", " dwadzieścia ", " trzydzieści ", " czterdzieści ", " pięćdziesiąt ", " sześćdziesiąt ", " siedemdziesiąt ", " osiemdziesiąt ", " dziewięćdziesiąt "],
        TEENS = ["", " jedenaście ", " dwanaście ", " trzynaście ", " czternaście ", " piętnaście ", " szesnaście ", " siedemnaście ", " osiemnaście ", " dziewiętnaście "],
        UNITIES = ["", " jeden ", " dwa ", " trzy ", " cztery ", " pięć ", " sześć ", " siedem ", " osiem ", " dziewięć "],
        ZERO = "zero",
        MINUS = " minus ",
        THOUSANDS = { one: " tysiąc ", few: " tysiące ", many: " tysięcy " },
        MILIONS = { one: " milion ", few: " miliony ", many: " milionów " },
        POSITIVE_OVERFLOW = "zbyt dużo",
        NEGATIVE_OVERFLOW = "zbyt mało";

    function process0999(digits) {
        var result = "";

        result += HUNDREDS[digits[0]];

        if (digits[1] === 1 && digits[2] !== 0) {
            result += TEENS[digits[2]];
        } else {
            result += TENS[digits[1]];
            result += UNITIES[digits[2]];
        }

        return result;
    };

    function classify(digits) {
        if (digits.join("") === "001") {
            return "one";
        } else if (digits[1] !== 1 && (digits[2] === 2 || digits[2] === 3 || digits[2] === 4)) {
            return "few";
        } else {
            return "many";
        }
    };

    function polishToWords(number) {
        var digits,
            result = "";

        number = parseInt(number, 10);
        digits = String(Math.floor(Math.abs(number))).split("");

        for (var i = 0; i < digits.length; i++) {
            digits[i] = parseInt(digits[i], 10);
        }

        if (digits.length > 9) {
            return number > 0 ? POSITIVE_OVERFLOW : NEGATIVE_OVERFLOW;
        }

        if (parseInt(number, 10) < 0) {
            result += MINUS;
        }

        while (digits.length < 9) {
            digits.unshift(0);
        }

        if (parseInt(number, 10) === 0) {
            result += ZERO;
        } else {
            result += process0999(digits.slice(0, 3));

            if (digits.slice(0, 3).join("") !== "000") {
                result += MILIONS[classify(digits.slice(0, 3))];
            }

            result += process0999(digits.slice(3, 6));

            if (digits.slice(3, 6).join("") !== "000") {
                result += THOUSANDS[classify(digits.slice(3, 6))];
            }

            result += process0999(digits.slice(6, 9));
        }

        return result.replace(/ +/g, " ").replace(/^ +| +$/g, "");
    }

    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = polishToWords;
        }
        exports.polishToWords = polishToWords;
    } else {
        this.polishToWords = polishToWords;
    }
}).call(this);
