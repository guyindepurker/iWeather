import { useHistory } from 'react-router';

const useQuery = (queryOptions = []) => {
  const history = useHistory();
  const queryParams = new URLSearchParams(history.location.search);
  const queryObject = queryOptions.reduce((acc, option) => {
    if (!acc[option]) acc[option] = null;
    acc[option] = queryParams.get(`${option}`);
    return acc;
  }, {});

  return queryObject;
};

export default useQuery;
