const Input = ({dropdown, onChange, label, symbols}) => {

    if (!symbols) return ("Loading")

    let arrOfSymbols = Object.keys(symbols);
    return (
        <div className="flex flex-col h-16 mb-12 sm:text-sm">
            <label
                htmlFor={label}
                className="font-bold md:text-2xl text-indigo-600 pb-2"
            >
                {label}
            </label>
            {(dropdown && (
                <select
                    name="countries"
                    onChange={e => onChange(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md p-2.5"
                >
                    {arrOfSymbols.map(symbol => (
                        <option
                            value={symbol}
                            key={arrOfSymbols.indexOf(symbol)}
                        >
                            {symbols[symbol]}
                        </option>
                    ))}
                </select>
            )) || (
                <input
                    type="number"
                    placeholder="Enter amount..."
                    className="focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md p-2.5"
                    onChange={e => onChange(e.target.value)}
                />
            )}
        </div>
    );
};
export default Input;