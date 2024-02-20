import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import backgroundImage from './assets/bg.png'; // Adjust the path accordingly
import Footer from './components/Footer';
import Chat from './components/Chat';
const BET_AMOUNT = 10;
const TEXT_DISTANCE = 80;

const wheelConfig = {
  backgroundColors: ['red', 'black'], // Update wheel background colors
  textColors: ['gold'], // Update text color
  outerBorderColor: 'gold', // Update outer border color
  outerBorderWidth: 5,
  innerRadius: 20,
  innerBorderColor: 'gold', // Update inner border color
  innerBorderWidth: 2,
  radiusLineColor: 'gold', // Update radius line color
  radiusLineWidth: 2,
  fontSize: 24, // Increase font size
  perpendicularText: true,
  textDistance: TEXT_DISTANCE,
};

const RouletteGame = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [result, setResult] = useState(null);
  const [balance, setBalance] = useState(100);
  const [spinHistory, setSpinHistory] = useState([]);

  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'white' } },
    { option: '32', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '15', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '19', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '4', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '21', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '2', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '25', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '17', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '34', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '6', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '27', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '13', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '36', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '11', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '30', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '8', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '23', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '10', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '5', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '24', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '16', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '33', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '1', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '20', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '14', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '31', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '9', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '22', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '18', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '29', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '7', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '28', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '12', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '35', style: { backgroundColor: 'black', textColor: 'white' } },
    { option: '3', style: { backgroundColor: 'red', textColor: 'white' } },
    { option: '26', style: { backgroundColor: 'black', textColor: 'white' } },
  ];

  const spinWheel = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

    setBalance((prevBalance) => prevBalance - BET_AMOUNT);

    if (data[newPrizeNumber].option === '0') {
      setBalance((prevBalance) => prevBalance + BET_AMOUNT * 2);
      alert('Congratulations! You won!');
    }

    setSpinHistory((prevHistory) => [
      { spinNumber: prevHistory.length + 1, result: data[newPrizeNumber].option },
      ...prevHistory,
    ]);

    setResult(data[newPrizeNumber].option);
  };

  const handleSpinClick = () => {
    spinWheel();
  };

  const handleResetClick = () => {
    setMustSpin(false);
    setPrizeNumber(0);
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
<div
  className="flex items-center min-h-screen bg-gradient-to-b from-darkred to-darkpurple p-4 md:p-8"
  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
>        <div className="flex flex-col md:flex-row-reverse w-full">
          {/* Chat Component */}
          <div className="md:w-1/4 p-4">
            <Chat />
          </div>

          {/* Wheel and Game Content */}
          <div className="md:w-3/4 flex flex-col items-center">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={() => setMustSpin(false)}
              {...wheelConfig}
            />

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
              {!mustSpin && (
                <button
                  className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-700 transform transition-transform duration-300 hover:scale-105"
                  onClick={handleSpinClick}
                >
                  SPIN
                </button>
              )}

              {mustSpin && (
                <button
                  className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-900 transform transition-transform duration-300 hover:scale-105"
                  onClick={handleResetClick}
                >
                  RESET
                </button>
              )}
            </div>

            {result && <p className="mt-4 text-yellow-500 font-bold text-lg md:text-xl">Result: {result}</p>}
            <p className="mt-2 text-yellow-500">Balance: {balance}</p>

            <div className="mt-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-yellow-500">Spin History</h2>
              <ul className="list-disc pl-4 text-yellow-500">
                {spinHistory.map((spin) => (
                  <li key={spin.spinNumber}>
                    Spin {spin.spinNumber}: Result {spin.result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default RouletteGame;