import { Suspense } from 'react';

import {customers} from "@/app/lib/placeholder-data";
export default function Page() {

    return(

    <>

        <p>Dashboard Page</p>
        <Suspense fallback={<Loading />}><ul>
            {customers.map((customer) => (
                <li key={customer.id}>{customer.name}</li>

            ))}
        </ul>
        </Suspense>
    </>
)
};
function Loading() {
    return <h2>🌀 Loading...</h2>;
}
