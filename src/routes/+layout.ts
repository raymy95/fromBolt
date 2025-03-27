import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
  const VALID_TOKEN = 'your-secret-token';
  const token = url.searchParams.get('token');

  if (!token || token !== VALID_TOKEN) {
    throw redirect(303, '/unauthorized');
  }

  return {
    token: VALID_TOKEN
  };
};