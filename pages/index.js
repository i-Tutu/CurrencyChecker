import {useState} from 'react';
import axios from 'axios';
import Input from './components/Input.js';
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home({symbols}) {
    const [convertFrom, setConvertFrom] = useState('ANG');
    const [convertTo, setConvertTo] = useState('ANG');
    const [amount, setAmount] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState(null);
    /**
     *
     * eg http://localhost:3000/api/convert
     * Fetch the converted amount
     */
    const convertCurrency = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:3000/api/convert',
            params: {convertFrom, convertTo, amount}
        };
        axios
            .request(options)
            .then(function (response) {
                const {data} = response;
                setConvertedAmount(Math.floor(data.result));
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    return (
        <div>
        <Header/>
        <div className="flex flex-col items-center">
            <h2 className="border-gray-300 rounded-md text-gray-700 font-bold pt-10 pb-6 md:text-3xl sm:text-2xl">
                Currency Conversion
            </h2>
            <h3 className="border-gray-300 rounded-md text-gray-700 mb-5">
                Convert Different Currencies
            </h3>

            <div className="flex flex-col items-center">
            <div className="focus:border-indigo-500 block w-full p-2.5 sm:text-sm border-gray-300 rounded-md text-gray-700">
                <Input
                    label="Convert from"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                    dropdown={true}
                    onChange={setConvertFrom}
                    symbols={symbols}
                />
                <Input
                    label="To Currency"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                    dropdown={true}
                    onChange={setConvertTo}
                    symbols={symbols}
                />
                <Input
                    label="Your Amount"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2.5"
                    dropdown={false}
                    onChange={setAmount}
                    symbols={{}}
                />

                {convertedAmount && (
                    <div className="flex w-3/5 rounded my-6 md:w-full">
                        <p className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md p-2.5 text-lg uppercase tracking-wider md:text-base">
                            Converted Amount: <span>{`${convertedAmount} ${convertTo}`}</span>
                        </p>
                    </div>
                )}

                <button
                    className="w-full py-2 px-8 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={convertCurrency}
                >
                    Convert
                </button>

            </div>
            </div>
            <Footer/>
        </div>
        </div>
    );
}
export async function getServerSideProps() {
    const res = await axios.get('http://localhost:3000/api/symbol');
    const {data} = res;
    const {symbols} = data;
    if (!symbols) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            symbols
        }
    };
}