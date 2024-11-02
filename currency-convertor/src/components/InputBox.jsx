import React, { useId } from "react";

function InputBox({
    label = "Label",
    ammount,
    onAmmountChange,
    onCurrencyChange,
    selectCurrency,
    CurrencyOptions = [],
    ammountDisable = false,
    currecyDisable = false,
    className = "",
}) {
    const ammountId = useId();
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={ammountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={ammountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={ammountDisable}
                    value={ammount}
                    onChange={(e) => onAmmountChange && onAmmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency</p> {/* Changed to text-black */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-500 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currecyDisable}
                >
                    {CurrencyOptions.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
