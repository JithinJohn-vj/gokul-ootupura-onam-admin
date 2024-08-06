'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Define schemas for login and forgot password forms
const loginSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  })
});

const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address.'
  })
});

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Track form mode
  const router = useRouter();

  const form = useForm<
    z.infer<typeof loginSchema | typeof forgotPasswordSchema>
  >({
    resolver: zodResolver(
      isForgotPassword ? forgotPasswordSchema : loginSchema
    ),
    defaultValues: {
      username: '',
      password: '',
      email: ''
    }
  });

  const onSubmit = (
    values: z.infer<typeof loginSchema | typeof forgotPasswordSchema>
  ) => {
    router.push('/reset-password')
    console.log(values);
  };

  return (
    <div className="px-[8vw]">
      <div className="pb-3">
        <h1 className="text-3xl font-bold">
          {isForgotPassword ? 'Forgot Password' : 'Log In'}
        </h1>
        <p className="text-[#89868D]">
          {isForgotPassword
            ? 'Enter your email to reset your password'
            : 'Login to your account'}
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {isForgotPassword ? (
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder="Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          ) : (
            <>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        placeholder="Username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="h-12 pr-10"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <Eye className="h-5 text-[#89868D]" />
                          ) : (
                            <EyeOff className="h-5 text-[#89868D]" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p
                className="cursor-pointer text-end text-xs text-[#6B0B00]"
                onClick={() => setIsForgotPassword(true)}
              >
                forgot password
              </p>
            </>
          )}
          <Button className="h-12 w-full bg-[#6B0B00]" type="submit">
            {isForgotPassword ? 'Send Email' : 'Log In'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
