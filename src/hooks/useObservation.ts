import { useGraphQL, useGraphQLMutation } from 'Services/api';
import { getObservationsQuery } from 'Services/queries';
import { createObservationMutation } from 'Services/mutations';
import { TimeLineItem } from 'Pages/MVP/evaluation/evaluation.interface';

import useGlobalStore from 'State/store';
import {
  FocusArea,
  Moment,
  MutationCreateObservationArgs,
  VideoNote
} from '../__generated/graphql';

export const useObservation = () => {
  const [
    setFocusAreas,
    setTimeLineItems,
    observationId,
    setGeneratedPrompts,
    setRubricId,
    setEvaluationLoading
  ] = useGlobalStore((state) => [
    state.setFocusAreas,
    state.setTimeLineItems,
    state.observationId,
    state.setGeneratedprompts,
    state.setRubricId,
    state.setEvaluationLoading
  ]);

  const { refetch: refetchObservation } = useGraphQL(
    getObservationsQuery,
    {
      enabled: false,
      onSuccess: (data) => {
        if (data.observation.rubric) {
          const focusAreas: Array<FocusArea> =
            data.observation.rubric.focusArea;
          setFocusAreas(focusAreas);
          setRubricId(data.observation.rubric.id);
        }
        setGeneratedPrompts(data.observation.generatedPrompt);

        // Building up the script items
        const timelineItems: TimeLineItem[] = [];

        const {
          moment: moments,
          videoNote: notes
        }: { moment: Moment[]; videoNote: VideoNote[] } = data.observation;

        for (let i = 0; i < moments.length; ++i) {
          if (moments[i].type === 'transcript') {
            timelineItems.push({
              momentId: moments[i].id,
              item: moments[i].transcriptMoment!,
              type: 'moment',
              moment: moments[i]
            });
          }
        }

        for (let i = 0; i < notes.length; ++i) {
          timelineItems.push({
            momentId: notes[i].id,
            item: notes[i],
            type: 'videonote'
          });
        }

        setTimeLineItems(timelineItems);
        setEvaluationLoading(false);
      }
    },
    {
      id: observationId
    }
  );

  const { mutateAsync } = useGraphQLMutation(createObservationMutation);
  const createObservation = (input: MutationCreateObservationArgs) => {
    return new Promise((resolve, reject) => {
      mutateAsync(input)
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const getObservation = () => {
    setEvaluationLoading(true);
    setFocusAreas([]);
    setTimeLineItems([]);
    refetchObservation();
  };

  return {
    getObservation,
    createObservation
  };
};
