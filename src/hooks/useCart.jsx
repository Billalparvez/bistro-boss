
import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch('https://api.github.com/repos/TanStack/query').then(
  //       (res) => res.json(),
  //     ),
  // })

  // tanStack Query
  const axiosSecure = useAxios()
  const { user } = useAuth()
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/carts?email=${user?.email}`)
      return result.data
    }

  })
  return [cart, refetch,user]

};

export default useCart;