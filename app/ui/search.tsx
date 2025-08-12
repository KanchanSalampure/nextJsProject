'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {useSearchParams,useRouter,usePathname} from "next/navigation";
import * as path from "node:path";
import { useDebouncedCallback } from 'use-debounce';
export function Search({placeholder}: { placeholder: string }) {
    const searchParams = useSearchParams();

    const pathname=usePathname();
    const {replace} =useRouter()
    // Inside the Search Component...
    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);

        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    // import { useRouter } from 'next/navigation';
    //
    // export default function MyComponent() {
    //     const router = useRouter(); // Get router object
    //
    //     function handleClick() {
    //         router.push('/dashboard'); // Navigate to /dashboard
    //     }
    //
    //     return <button onClick={handleClick}>Go to Dashboard</button>;
    // }usePathname this retune url qhttp://localhost:3000/products/laptop?sort=asc only  /products/laptop will  return
    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch
                    (e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon
                className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
        </div>
    );
}
