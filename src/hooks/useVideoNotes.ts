import { useGraphQLMutation } from 'Services/api';
import {
  createVideoNoteMutation,
  updateVideoNoteMutation,
  deleteVideoNoteMutation
} from 'Services/mutations';

import useGlobalStore from 'State/store';
import {
  MutationCreateVideoNoteArgs,
  MutationDeleteVideoNoteArgs,
  MutationUpdateVideoNoteArgs
} from '../__generated/graphql';

export const useVideoNotes = () => {
  const [timelineItems, setTimeLineItems] = useGlobalStore((state) => [
    state.timelineItems,
    state.setTimeLineItems
  ]);

  const { mutateAsync: createVideoNoteMutate } = useGraphQLMutation(
    createVideoNoteMutation
  );
  const { mutateAsync: updateVideoNoteMutate } = useGraphQLMutation(
    updateVideoNoteMutation
  );
  const { mutateAsync: deleteVideoNoteMutate } = useGraphQLMutation(
    deleteVideoNoteMutation
  );

  const createVideoNote = (input: MutationCreateVideoNoteArgs) => {
    return new Promise((resolve, reject) => {
      createVideoNoteMutate(input)
        .then((data) => {
          timelineItems.push({
            type: 'videonote',
            item: data.createVideoNote,
            momentId: data.id
          });
          setTimeLineItems(timelineItems);
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const updateVideoNote = (input: MutationUpdateVideoNoteArgs) => {
    return new Promise((resolve, reject) => {
      updateVideoNoteMutate(input)
        .then(() => {
          setTimeLineItems(
            timelineItems.map((t) => {
              if (t.item.id === input.id && t.type === 'videonote')
                t.item.content = input.content || '';
              return t;
            })
          );
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const deleteVideoNote = (input: MutationDeleteVideoNoteArgs) => {
    return new Promise((resolve, reject) => {
      deleteVideoNoteMutate(input)
        .then(() => {
          setTimeLineItems(timelineItems.filter((t) => t.item.id !== input.id));
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  };

  return {
    createVideoNote,
    updateVideoNote,
    deleteVideoNote
  };
};
