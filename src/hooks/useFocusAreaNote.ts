import { useGraphQLMutation } from 'Services/api';
import {
  createFocusAreaNoteMutation,
  deleteFocusAreaNoteMutation,
  updateFocusAreaNoteMutation
} from 'Services/mutations';
import useGlobalStore from 'State/store';

import {
  MutationCreateFocusAreaNoteArgs,
  MutationDeleteFocusAreaNoteArgs,
  MutationUpdateFocusAreaNoteArgs
} from '../__generated/graphql';

export const useFocusAreaNote = () => {
  const [focusAreas, setFocusAreas] = useGlobalStore((state) => [
    state.focusAreas,
    state.setFocusAreas
  ]);
  const { mutateAsync: addNoteMutate } = useGraphQLMutation(
    createFocusAreaNoteMutation
  );
  const { mutateAsync: deleteNoteMutate } = useGraphQLMutation(
    deleteFocusAreaNoteMutation
  );
  const { mutateAsync: updateNoteMutate } = useGraphQLMutation(
    updateFocusAreaNoteMutation
  );

  const addNote = (input: MutationCreateFocusAreaNoteArgs) => {
    return new Promise((resolve, reject) => {
      addNoteMutate(input)
        .then((data) => {
          focusAreas.map((t) => {
            if (t.id === input.focusArea_id) {
              t.focusAreaNote.push(data.createFocusAreaNote);
            }
            return t;
          });
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const deleteNote = (input: MutationDeleteFocusAreaNoteArgs) => {
    return new Promise((resolve, reject) => {
      deleteNoteMutate(input)
        .then((data) => {
          const { id, focusArea_id: focusAreaId } = data.deleteFocusAreaNote;
          setFocusAreas(
            focusAreas.map((t) => {
              if (t.id === focusAreaId) {
                t.focusAreaNote = t.focusAreaNote.filter(
                  (note) => note.id !== id
                );
              }
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

  const updateNote = (input: MutationUpdateFocusAreaNoteArgs) => {
    return new Promise((resolve, reject) => {
      updateNoteMutate(input, {
        onSuccess: (data) => {
          const { id, focusArea_id: focusAreaId } = data.updateFocusAreaNote;
          setFocusAreas(
            focusAreas.map((t) => {
              if (t.id === focusAreaId) {
                t.focusAreaNote = t.focusAreaNote.map((note) =>
                  note.id !== id ? note : data.updateFocusAreaNote
                );
              }
              return t;
            })
          );
          resolve(true);
        },
        onError: (error) => {
          reject(error);
        }
      });
    });
  };

  return {
    addNote,
    deleteNote,
    updateNote
  };
};
