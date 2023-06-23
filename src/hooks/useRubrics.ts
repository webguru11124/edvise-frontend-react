import { useGraphQL } from 'Services/api';
import { getRubricsQuery } from 'Services/queries';

import useGlobalStore from 'State/store';
import { Observation, Rubric } from '../__generated/graphql';

export const useRubrics = () => {
  const [setRubrics] = useGlobalStore((state) => [state.setRubrics]);

  useGraphQL(getRubricsQuery, {
    onSuccess: (data) => {
      const { observations }: { observations: Observation[] } = data;
      const datas: Rubric[] = [];

      observations.forEach(({ rubric }) => {
        if (rubric) datas.push(rubric);
      });
      setRubrics(datas);
    }
  });
};
