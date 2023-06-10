import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxios";

const useCart = () => {
    
    const { user, loading } = useAuth()
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClass?email=${user?.email}`)
            return res.data;
        }
    })

    return [cart, refetch]
}

export default useCart;