import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useClass = () => {
    
    const { user, loading } = useAuth()
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        }
    })

    return [classes, refetch]
}

export default useClass;