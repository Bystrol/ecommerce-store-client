import { useQuery } from "@tanstack/react-query"

const useExchangeRate = () => {
  const fetchExchangeRates = async () => {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATES_API_KEY}/latest/USD`
    )

    const data = await response.json()

    return data.conversion_rates
  }

  return useQuery({
    queryKey: ["exchangeRate"],
    queryFn: fetchExchangeRates,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
  })
}

export default useExchangeRate
