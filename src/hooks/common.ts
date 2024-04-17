import { OperationVariables, useMutation, useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import toast from "react-hot-toast";

export const useCustomQuery = <T>(
  query: DocumentNode,
  variables?: OperationVariables
) => {
  const { loading, error, data } = useQuery<T>(query, {
    variables,
  });

  if (error) {
    toast.error(error.message);
  }

  return { loading, error, data };
};

export const useCustomMutation = <T>(
  query: DocumentNode,
  refetchQuery?: DocumentNode,
  refetchQueryName?: string
) => {
  const [mutation, { data, loading, error }] = useMutation<T>(
    query,
    refetchQuery && refetchQueryName
      ? {
          refetchQueries: [refetchQuery, refetchQueryName],
        }
      : undefined
  );

  return { loading, error, data, mutation };
};
