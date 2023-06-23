import { useGraphQLMutation } from 'Services/api';
import {
  createFocusAreaMutation,
  deleteFocusAreaMutation,
  updateFocusAreaMutation,
  updateFocusAreaScoreMutation
} from 'Services/mutations';

import useGlobalStore from 'State/store';
import {
  MutationCreateFocusAreaArgs,
  MutationDeleteFocusAreaArgs,
  MutationUpdateFocusAreaArgs,
  MutationUpdateFocusAreaScoreArgs
} from '../__generated/graphql';

export const useFocusArea = () => {
  const [setFocusAreas, focusAreas] = useGlobalStore((state) => [
    state.setFocusAreas,
    state.focusAreas
  ]);

  const { mutateAsync: createMutate } = useGraphQLMutation(
    createFocusAreaMutation
  );
  const createFocusArea = (input: MutationCreateFocusAreaArgs) => {
    return new Promise((resolve, reject) => {
      createMutate(input)
        .then((data) => {
          if (input.addToBottom)
            setFocusAreas([...focusAreas, data.createFocusArea]);
          else setFocusAreas([data.createFocusArea, ...focusAreas]);
          resolve(true);
        })
        .catch(reject);
    });
  };

  const { mutateAsync: deleteMutate } = useGraphQLMutation(
    deleteFocusAreaMutation
  );
  const deleteFocusArea = (input: MutationDeleteFocusAreaArgs) => {
    return new Promise((resolve, reject) => {
      deleteMutate(input)
        .then(() => {
          setFocusAreas(focusAreas.filter((t) => t.id !== input.id));
          resolve(true);
        })
        .catch(reject);
    });
  };

  const { mutateAsync: updateMutate } = useGraphQLMutation(
    updateFocusAreaMutation
  );
  const updateFocusArea = (input: MutationUpdateFocusAreaArgs) => {
    return new Promise((resolve, reject) => {
      updateMutate(input)
        .then(() => {
          setFocusAreas(
            focusAreas.map((t) =>
              t.id !== input.id
                ? t
                : {
                    ...t,
                    title: input.title || ''
                  }
            )
          );
          resolve(true);
        })
        .catch(reject);
    });
  };

  const { mutateAsync: updateFocusAreaScoreMutate } = useGraphQLMutation(
    updateFocusAreaScoreMutation
  );
  const updateFocusAreaScore = (input: MutationUpdateFocusAreaScoreArgs) => {
    return new Promise((resolve, reject) => {
      updateFocusAreaScoreMutate(input)
        .then(() => {
          resolve(true);
        })
        .catch(reject);
    });
  };

  return {
    createFocusArea,
    deleteFocusArea,
    updateFocusArea,
    updateFocusAreaScore
  };
};
