import {gray} from "next/dist/lib/picocolors";


import clsx from 'clsx';
import {CheckIcon, ClockIcon} from "@heroicons/react/24/outline";
export default function Teststatus({mybutton} :{mybutton:string}) {
return(
    <>
  <span className={clsx('inline-flex items-center rounded-full px-2 py-1 text-xs',
      {'bg-gray-100 text-gray-500' : mybutton === 'pending',
        'bg-red-100 text-red-500' : mybutton === 'paid',
  },
  )}>
    {mybutton==='pending' ? (<>pending   <ClockIcon className="ml-1 w-4 text-gray-500" /></>):null}
    {mybutton=='paid'?(<>paid <CheckIcon className="ml-1 w-4 text-black-500" /></>):null}
  </span>
    </>
);

}