'use client'
import { useUpdateUser } from '@/hook/useUpdateUser';
import { useEffect } from 'react';

export const AuthProvider = ({ children }: { children: any}) => {
  const {updateUserToken} = useUpdateUser()
  useEffect(() => {
    updateUserToken()
  }, [updateUserToken])
  return (
    <>
      {children}
    </>
  );
};

