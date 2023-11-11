import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn() {
  const {pending} = useFormStatus();
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 group focus:scale-110 active:scale-105 hover:scale-110 transition-all h-[3rem] w-[8rem] text-white bg-gray-900 hover:bg-gray-950 px-5 py-3 rounded-full outline-none disabled:scale-100 disabled:bg-opacity-60"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
