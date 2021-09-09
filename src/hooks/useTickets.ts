import TicketsService from 'networking/services/TicketsService';
import { useEffect, useState } from 'react';

export const useTickets = () => {
  const [error, setError] = useState<Error | null>(null);
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setIsLoading(true);

        const response = await TicketsService.index();

        console.log(response);

        setTickets(response);
      } catch (requestError) {
        console.error(requestError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  return {
    error,
    isLoading,
    tickets
  };
};
