import { useGraphQLMutation } from 'Services/api';
import {
  addMomentToFocusAreasMutation,
  createMomentMutation,
  createTranscriptMomentMutation,
  deleteMomentMutation,
  removeMomentFromFocusAreasMutation
} from 'Services/mutations';

import useGlobalStore from 'State/store';
import {
  Moment,
  MutationAddMomentToFocusAreasArgs,
  MutationCreateMomentArgs,
  MutationCreateTranscriptMomentArgs,
  MutationDeleteMomentArgs,
  MutationRemoveMomentFromFocusAreasArgs
} from '../__generated/graphql';

export const useMoment = () => {
  const [currentMomentType, focusAreas, setFocusAreas] = useGlobalStore(
    (state) => [state.currentMomentType, state.focusAreas, state.setFocusAreas]
  );

  const { mutateAsync: createMomentMutate } =
    useGraphQLMutation(createMomentMutation);
  const { mutateAsync: createTranscriptMomentMutate } = useGraphQLMutation(
    createTranscriptMomentMutation
  );
  const { mutate: deleteMomentMutate } =
    useGraphQLMutation(deleteMomentMutation);

  const createMoment = (input: MutationCreateMomentArgs) => {
    return new Promise<Moment>((resolve, reject) => {
      createMomentMutate(input)
        .then((data) => {
          resolve(data.createMoment);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const createTranscriptMoment = (
    focusAreaId: number,
    input: MutationCreateTranscriptMomentArgs
  ) => {
    return new Promise((resolve, reject) => {
      createMoment({
        focusArea_id: focusAreaId,
        observation_id: 1,
        type: currentMomentType
      }).then((moment) => {
        createTranscriptMomentMutate({ ...input, moment_id: moment.id })
          .then((transcriptMoment) => {
            moment.transcriptMoment = transcriptMoment.createTranscriptMoment;

            setFocusAreas(
              focusAreas.map((focusArea) => {
                if (focusArea.id === focusAreaId)
                  return {
                    ...focusArea,
                    moment: [...focusArea.moment, moment]
                  };
                return focusArea;
              })
            );

            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };

  const deleteMoment = (input: MutationDeleteMomentArgs) => {
    return new Promise((resolve, reject) => {
      deleteMomentMutate(input, {
        onSuccess: resolve,
        onError: reject
      });
    });
  };

  const { mutateAsync: addMomentToFocusAreasMutate } = useGraphQLMutation(
    addMomentToFocusAreasMutation
  );
  const { mutateAsync: removeMomentFromFocusAreasMutate } = useGraphQLMutation(
    removeMomentFromFocusAreasMutation
  );

  const addMomentToFocusAreas = (input: MutationAddMomentToFocusAreasArgs) => {
    return new Promise((resolve, reject) => {
      addMomentToFocusAreasMutate(input)
        .then(() => {
          resolve(true);
        })
        .catch(reject);
    });
  };

  const removeMomentFromFocusAreas = (
    input: MutationRemoveMomentFromFocusAreasArgs
  ) => {
    return new Promise((resolve, reject) => {
      removeMomentFromFocusAreasMutate(input)
        .then(() => {
          setFocusAreas(
            focusAreas.map((focusArea) => {
              if (input.focusArea_ids.indexOf(focusArea.id) !== -1)
                focusArea.moment = focusArea.moment.filter(
                  (m) => input.moment_id !== m.id
                );
              return focusArea;
            })
          );
          resolve(true);
        })
        .catch(reject);
    });
  };

  return {
    createTranscriptMoment,
    deleteMoment,
    addMomentToFocusAreas,
    removeMomentFromFocusAreas
  };
};
