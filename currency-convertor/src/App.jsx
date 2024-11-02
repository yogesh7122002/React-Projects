import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [ammount, setAmmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmmount, setConvertedAmmount] = useState(0);

  const currencyinfo = useCurrencyInfo(from);
  const options = Object.keys(currencyinfo);

  const convert = () => {
    const rate = currencyinfo[to];
    console.log(`Converting ${ammount} from ${from} to ${to} at rate ${rate}`); // Debugging log
    if (rate) {
      setConvertedAmmount(ammount * rate);
    } else {
      setConvertedAmmount(0); // Reset if currency info is not available
      console.error("Conversion rate not available for the selected currency."); // Error log
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmmount(ammount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                ammount={ammount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                  setAmmount(0); // Reset amount when changing currency
                }}
                onAmmountChange={(ammount)=>setAmmount(ammount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                ammount={convertedAmmount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                ammountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {ammount} {from.toUpperCase()} to {convertedAmmount} {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
