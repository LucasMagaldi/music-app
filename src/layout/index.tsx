import { fetchUserProfile } from "../api/user-profile"
import { useQuery } from 'react-query'
import { Body } from "./body";
import { Header } from "./header";
import { Loading } from "../components/Loading";

export function Layout() {
    const { data, isLoading } = useQuery('userProfile', () => fetchUserProfile())

    return(
        <div>
            {isLoading && <Loading />}
            <Header profileImage={data?.images[0].url}/>
            <Body />
        </div>
    )
}