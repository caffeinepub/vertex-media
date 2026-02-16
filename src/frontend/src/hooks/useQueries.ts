import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactSubmission, NetworkApplication } from '../backend';

export function useGetContactSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['contactSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetNetworkApplications() {
  const { actor, isFetching } = useActor();

  return useQuery<NetworkApplication[]>({
    queryKey: ['networkApplications'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getNetworkApplications();
    },
    enabled: !!actor && !isFetching,
  });
}
