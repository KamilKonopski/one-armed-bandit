"use strict";
const [...addButtons] = document.querySelectorAll(".button--add");
const [...inputs] = document.querySelectorAll("input");
const [...labelsSpan] = document.querySelectorAll("label span");
const [...labels] = document.querySelectorAll("label");
const [...moneySpan] = document.querySelectorAll(".money");
const summary = document.querySelector(".summary__number");
let summaryMoney = 0;
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function () {
        var _a;
        let money;
        if (labels[i].innerText.includes("gr")) {
            const moneyValue = labelsSpan[i].innerText;
            const value = (_a = inputs[i]) === null || _a === void 0 ? void 0 : _a.value;
            money = +moneyValue * +value * 0.01;
            moneySpan[i].innerText = `${(money * 100).toFixed(2)}gr`;
        }
        else {
            const moneyValue = labelsSpan[i].innerText;
            const value = inputs[i].value;
            money = +moneyValue * +value * 1;
            moneySpan[i].innerText = `${money.toFixed(2)}zł`;
        }
        summaryMoney += money;
        summary.innerText = `${summaryMoney.toFixed(2)}zł`;
    });
}
//# sourceMappingURL=app.js.map