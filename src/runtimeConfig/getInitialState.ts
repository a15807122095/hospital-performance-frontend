import { UserOutlined } from '@ant-design/icons';
import React from 'react';

export interface InitialStateType {
  [key: string]: any;
}

export default async function getInitialState(): Promise<InitialStateType> {
  return {
    avatar: React.createElement(UserOutlined, {
      style: { color: '#1877F2', fontSize: '1.2rem' },
    }),
  };
}
