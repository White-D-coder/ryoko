import React, { createContext, useContext, useState } from 'react';

export type Currency = 'USD' | 'INR' | 'JPY' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amountInUSD: number) => string;
}

const RATES: Record<Currency, { rate: number; symbol: string; prefix: boolean }> = {
  USD: { rate: 1, symbol: '$', prefix: true },
  INR: { rate: 83.5, symbol: '₹', prefix: true },
  JPY: { rate: 155, symbol: '¥', prefix: true },
  EUR: { rate: 0.92, symbol: '€', prefix: true },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const formatPrice = (amountInUSD: number): string => {
    const info = RATES[currency];
    const converted = Math.round(amountInUSD * info.rate);
    return `${info.symbol}${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
