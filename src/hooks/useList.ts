import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reduxStore';
import {setList} from '../redux/actions/listActions';
import axios from 'axios';

export default function useList() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list.list);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://6172cfe5110a740017222e2b.mockapi.io/elements',
        );
        console.log('Fetched data:', response.data);
        dispatch(setList(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return {
    isLoading,
    list,
  };
}
