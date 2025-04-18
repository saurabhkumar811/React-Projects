import { useState } from "react";
import "./App.css";
import Inputbox from "./components/Inputbox";
import useCurrencyApi from "./hooks/Apicall";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const data = useCurrencyApi(from);
  const options = Object.keys(data);

  const updateCnvtVal = () => {
    const cnvtval = amount * data[to];
    setConvertedAmount(cnvtval);
  };

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1502319014/photo/100-new-us-dollar-bills-on-black-background.jpg?s=612x612&w=0&k=20&c=fuUyhCzHaphADwEIUXhDR89r4H4dEQRgWvphPV_lS2E=)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-gray-800 text-white p-6 rounded-xl shadow-lg border border-gray-700 w-2/5 text-center 
                   transition-all duration-300 group hover:shadow-cyan-500/50 hover:scale-105 sparkle-effect"
      >
        <h2
          className="text-cyan-400 text-4xl font-bold transition-all duration-300 hover:animate-pulse"
        >
          Currency Converter
        </h2>
      </div>

      <form
        className="mt-8 flex flex-col items-center space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <Inputbox
          label="From"
          amount={amount}
          selectedCurrency={from}
          onAmountChange={(value) => setAmount(value)}
          onCurrencyChange={(value) => setFrom(value)}
          currencyOptions={options}
        />

        <button
          onClick={swap}
          className="text-white text-xl font-semibold px-6 py-3 rounded-lg border-2 border-cyan-500 
                     bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 transform 
                     hover:scale-110 hover:shadow-lg glow-effect"
        >
          🔄 Swap
        </button>

        <Inputbox
          label="To"
          amount={convertedAmount}
          selectedCurrency={to}
          amountDisable
          currencyOptions={options}
          onCurrencyChange={(value) => setTo(value)}
        />

        <button
          onClick={updateCnvtVal}
          className="text-white text-xl font-semibold px-6 py-3 rounded-lg border-2 border-blue-500 
                     bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 transform 
                     hover:scale-110 hover:shadow-lg glow-effect"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
