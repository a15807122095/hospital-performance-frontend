import { getUserInfo } from '@/services/user';
import { isAuthenticated } from '@/utils/tokenUtils';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

export interface InitialStateType {
  [key: string]: any;
}

export default async function getInitialState(): Promise<InitialStateType> {
  let userInfo = null;
  if (isAuthenticated()) {
    const { success, data } = await getUserInfo();
    if (success) {
      userInfo = data;
    }
  }
  return {
    avatar: React.createElement(UserOutlined, {
      style: { color: '#1877F2', fontSize: '1.2rem' },
    }),
    userInfo,
  };
}
