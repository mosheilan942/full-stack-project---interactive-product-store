import { useState, useEffect } from 'react';
import axios from 'axios';


type Config = {
    method: string;
    maxBodyLength: number;
    url: string;
    headers: {};
}

const useFetch = <T,>(config: Config): [boolean, Error | null, null | T] => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T| null>(null);

  useEffect(() => {
    setPending(true);
    axios
      .request(config)
      .then(({ data }) => {
        setPending(false);
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setPending(false);
        setError(error);
        setData(null);
      });
  }, [config]);

  return [pending, error, data];
};

export default useFetch;