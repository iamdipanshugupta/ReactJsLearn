import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  CurrencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

  const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} /* yaha javascript thodi nutrious hai jo string format main le leti hai toh change karne ke liye Number()  method use karte hai number mai convert karne ke liye */
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {CurrencyOptions.map((currency) => 
            <option
            key={currency} /* agar hame react loops uses karne ahi toh key ko use karte hai  */
            value={currency}
            >
              {currency}
            </option>
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
