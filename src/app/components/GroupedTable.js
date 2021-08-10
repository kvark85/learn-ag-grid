import { useEffect } from 'react';
import { fetchData } from '../slices/vehicleSlice';
import { useDispatch } from "react-redux";


const GroupedTable = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()));

  return (
    <div>
      {'Grouped table'}
    </div>
  )
};

export default GroupedTable;
