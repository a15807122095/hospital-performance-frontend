import { request } from '@umijs/max';
import React from 'react';

export function getAccountDictionaryList(params: any) {
  return request('/base_config/account_dictionary/', {
    params,
  });
}

export function putAccountDictionary(id: React.Key, data: any) {
  return request(`/base_config/account_dictionary/${id}/`, {
    method: 'PUT',
    data,
  });
}

export function deleteAccountDictionary(id: React.Key) {
  return request(`/base_config/account_dictionary/${id}/`, {
    method: 'DELETE',
  });
}
