import { useContext } from 'react';
import { Context } from '../context/Context';

function useFuckingContext() {
  const sharedObj = useContext(Context);
  return sharedObj;
}

export default useFuckingContext;