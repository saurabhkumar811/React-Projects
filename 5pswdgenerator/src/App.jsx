import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numInc, setNumInc] = useState(false);
  const [charInc, setCharInc] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numInc) str += "0123456789";
    if (charInc) str += "!@#$%^&*?/|";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numInc, charInc]);

  useEffect(passGenerator, [length, numInc, charInc, passGenerator]);

  const CopyPassToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  }, [password]);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center animate-gradient">
        <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg border border-gray-700 wider-box relative group transition-all duration-300 hover:shadow-orange-500/50 hover:scale-105 sparkle-effect">
          <h2 className="text-orange-400 text-4xl font-bold text-center hover:animate-bounce transition-all duration-300">
            Password Generator
          </h2>

          <div className="flex rounded-lg bg-gray-800 p-2 shadow-md transition-all duration-300 hover:ring-2 hover:ring-orange-500 mt-4">
            <input
              ref={passRef}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-l-lg outline-none border-none text-lg"
              type="text"
              value={password}
              placeholder="Generated Password"
              readOnly
            />
            <button
              onClick={CopyPassToClipboard}
              className="bg-blue-500 hover:bg-blue-600 px-5 py-3 text-orange-500 font-bold font-semibold rounded-r-lg transition-all duration-300 transform hover:scale-110 glow-effect"
            >
              Copy
            </button>
          </div>

          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-3 hover:scale-105 transition-all duration-300">
              <input
                type="range"
                onChange={(e) => setLength(e.target.value)}
                min={6}
                max={25}
                className="w-full cursor-pointer accent-orange-500 transition-all hover:ring-2 hover:ring-orange-400"
              />
              <label className="text-gray-300 text-lg font-semibold">
                Length ({length})
              </label>
            </div>

            <div className="flex items-center space-x-3 hover:scale-105 transition-all duration-300">
              <input
                type="checkbox"
                checked={numInc}
                onChange={() => setNumInc((prev) => !prev)}
                className="w-6 h-6 accent-orange-500 transition-all hover:ring-2 hover:ring-orange-400"
              />
              <label className="text-gray-300 text-lg font-semibold">
                Include Numbers
              </label>
            </div>

            <div className="flex items-center space-x-3 hover:scale-105 transition-all duration-300">
              <input
                type="checkbox"
                checked={charInc}
                onChange={() => setCharInc((prev) => !prev)}
                className="w-6 h-6 accent-orange-500 transition-all hover:ring-2 hover:ring-orange-400"
              />
              <label className="text-gray-300 text-lg font-semibold">
                Include Characters
              </label>
            </div>
          </div>

          <button
            onClick={passGenerator}
            className="w-full bg-orange-500 hover:bg-orange-600  text-orange-500 font-semibold text-lg py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-orange-400 glow-effect mt-4"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
