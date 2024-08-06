
import { Metadata } from 'next';
import ResetPassForm from '@/components/forms/reset-auth-form';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function ResetPassword() {
  return (
<div className='relative w-full'>

    <div className="flex  h-screen items-center justify-center bg-[#F6F6F8]">
      <div className="grid items-center md:grid-cols-2 w-full justify-center ">
        <Image src="/images/auth/fp.svg" className='mx-auto  hidden md:flex' alt="login" width={500} height={500} />
        <ResetPassForm />
      </div>

      <Image className='absolute top-5 left-8 ' src="/images/logos/logoo.svg" alt="login" width={152} height={200} />


    </div>
    </div>

  );
}
