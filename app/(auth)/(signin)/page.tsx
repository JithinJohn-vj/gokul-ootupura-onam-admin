import { Metadata } from 'next';
import UserAuthForm from '@/components/forms/user-auth-form';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
<div className='relative'>

    <div className="flex  h-screen items-center justify-center bg-[#F6F6F8]">
      <div className="grid items-center md:grid-cols-2">
        <Image src="/images/auth/ln.svg" className='hidden md:flex' alt="login" width={674} height={600} />
        <UserAuthForm />
      </div>

      <Image className='absolute top-5 left-8 ' src="/images/logos/logoo.svg" alt="login" width={152} height={65} />


    </div>
    </div>

  );
}
