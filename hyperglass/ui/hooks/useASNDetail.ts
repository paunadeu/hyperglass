import { useQuery } from 'react-query';

import type { TASNDetails } from '~/types';
import type { TUseASNDetailFn } from './types';

async function query(ctx: TUseASNDetailFn): Promise<TASNDetails> {
  const [asn] = ctx.queryKey;
  const res = await fetch(`https://api.bgpview.io/asn/${asn}`, { mode: 'cors' });
  return await res.json();
}

export function useASNDetail(asn: string) {
  return useQuery(asn, query, {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnMount: false,
    cacheTime: Infinity,
  });
}