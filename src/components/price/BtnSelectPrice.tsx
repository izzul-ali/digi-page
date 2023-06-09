'use client';

import { useState } from 'react';

type TBtnValue = 'Day' | 'Month' | 'Year';
const btnValue: TBtnValue[] = ['Day', 'Month', 'Year'];

export default function BtnSelectPrice() {
  const [btnSelectedValue, setSelectedbtnValue] = useState<TBtnValue>('Month');
  return (
    <div className="flex justify-center mt-5 bg-gray-800 w-fit rounded-full mx-auto text-sm sm:text-xs font-inter">
      {btnValue.map((v) => (
        <button
          key={v}
          value={v}
          onClick={() => setSelectedbtnValue(v)}
          className={`py-2 px-5 rounded-full ${
            v === btnSelectedValue && 'text-white bg-gradient-to-r from-cyan-700/50 via-indigo-700/50 to-cyan-700/50'
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
