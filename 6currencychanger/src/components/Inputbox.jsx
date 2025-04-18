import { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency,
  amountDisable = false,
  currencyDisable = false,
}) {
  const inputId = useId();

  return (
    <div
      className="p-5 border border-gray-400 rounded-2xl shadow-lg w-96 bg-gray-800 text-white 
                 transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50 
                 sparkle-effect"
    >
      <div className="flex justify-between text-gray-300 text-lg font-semibold mb-3">
        <label htmlFor={inputId}>{label}</label>
        <label>Currency Type</label>
      </div>

      <div
        className="flex items-center rounded-lg bg-gray-700 p-3 shadow-md 
                   hover:ring-2 hover:ring-cyan-400 transition-all duration-300"
      >
        <input
          id={inputId}
          type="text"
          placeholder="0"
          className="outline-none bg-transparent text-xl w-full text-white px-3"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisable}
        />

        <select
          className="outline-none bg-transparent text-xl font-semibold text-white ml-3"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="bg-gray-900">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
