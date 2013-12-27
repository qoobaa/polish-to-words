$(document).ready(function () {

    test("zero", function () {
        equal(polishToWords(0), "zero");
    });

    test("minux", function () {
        equal(polishToWords(-1), "minus jeden");
        equal(polishToWords(-1000000), "minus jeden milion");
    });

    test("unities", function () {
        equal(polishToWords(1), "jeden");
        equal(polishToWords(2), "dwa");
        equal(polishToWords(3), "trzy");
        equal(polishToWords(4), "cztery");
        equal(polishToWords(5), "pięć");
        equal(polishToWords(6), "sześć");
        equal(polishToWords(7), "siedem");
        equal(polishToWords(8), "osiem");
        equal(polishToWords(9), "dziewięć");
    });

    test("teens", function () {
        equal(polishToWords(11), "jedenaście");
        equal(polishToWords(12), "dwanaście");
        equal(polishToWords(13), "trzynaście");
        equal(polishToWords(14), "czternaście");
        equal(polishToWords(15), "piętnaście");
        equal(polishToWords(16), "szesnaście");
        equal(polishToWords(17), "siedemnaście");
        equal(polishToWords(18), "osiemnaście");
        equal(polishToWords(19), "dziewiętnaście");
    });

    test("hundreds", function () {
        equal(polishToWords(100), "sto");
        equal(polishToWords(200), "dwieście");
        equal(polishToWords(300), "trzysta");
        equal(polishToWords(400), "czterysta");
        equal(polishToWords(500), "pięćset");
        equal(polishToWords(600), "sześćset");
        equal(polishToWords(700), "siedemset");
        equal(polishToWords(800), "osiemset");
        equal(polishToWords(900), "dziewięćset");
    });

    test("thousands", function () {
        equal(polishToWords(100000), "sto tysięcy");
        equal(polishToWords(101000), "sto jeden tysięcy");
        equal(polishToWords(102000), "sto dwa tysiące");
        equal(polishToWords(103000), "sto trzy tysiące");
        equal(polishToWords(104000), "sto cztery tysiące");
        equal(polishToWords(105000), "sto pięć tysięcy");
        equal(polishToWords(106000), "sto sześć tysięcy");
        equal(polishToWords(107000), "sto siedem tysięcy");
        equal(polishToWords(108000), "sto osiem tysięcy");
        equal(polishToWords(109000), "sto dziewięć tysięcy");
        equal(polishToWords(110000), "sto dziesięć tysięcy");
    });

    test("milions", function () {
        equal(polishToWords(100000000), "sto milionów");
        equal(polishToWords(101000000), "sto jeden milionów");
        equal(polishToWords(102000000), "sto dwa miliony");
        equal(polishToWords(103000000), "sto trzy miliony");
        equal(polishToWords(104000000), "sto cztery miliony");
        equal(polishToWords(105000000), "sto pięć milionów");
        equal(polishToWords(106000000), "sto sześć milionów");
        equal(polishToWords(107000000), "sto siedem milionów");
        equal(polishToWords(108000000), "sto osiem milionów");
        equal(polishToWords(109000000), "sto dziewięć milionów");
        equal(polishToWords(110000000), "sto dziesięć milionów");
    });

    test("mixed", function () {
        equal(polishToWords(66), "sześćdziesiąt sześć");
        equal(polishToWords(123), "sto dwadzieścia trzy");
        equal(polishToWords(789), "siedemset osiemdziesiąt dziewięć");
        equal(polishToWords(102305), "sto dwa tysiące trzysta pięć");
        equal(polishToWords(102305), "sto dwa tysiące trzysta pięć");
        equal(polishToWords(123456789), "sto dwadzieścia trzy miliony czterysta pięćdziesiąt sześć tysięcy siedemset osiemdziesiąt dziewięć");
    });

    test("overflows", function () {
        equal(polishToWords(1000000000), "zbyt dużo");
        equal(polishToWords(-1000000000), "zbyt mało");
    });

});
