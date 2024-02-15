import React from "react";

const CurrencySelector = ({
  defaultCurrency,
  onCurrencyChange,
  currencyOptions,
}) => {
  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="currency"
        className="block mb-2 text-sm font-medium text-white dark:text-white"
      >
        Select your default Currency
      </label>
      <select
        value={defaultCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {currencyOptions.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
    </form>
  );
};

export default CurrencySelector;
