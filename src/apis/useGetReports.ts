import { useQuery } from 'react-query';
import axios from 'axios';

const fetch = async () => {
  const { data } = await axios.get(`/bus-services-data.json`)
  return data.data;
}

export const useGetBusReports = () => {
  return useQuery(['BUSREPORTS'], fetch)
}
