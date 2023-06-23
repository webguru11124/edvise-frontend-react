import { getUsersLessons } from 'Services/queries';
import { useGraphQL } from 'Services/api';
import Avatar from 'Assets/avatar.png';
import imageOne from 'Assets/lesson_image.png';
import imageTwo from 'Assets/lesson_image_2.png';
import { transformDateCreated } from 'Utils/index';
import useGlobalStore from 'State/store';
import { useAuthInfo } from '@propelauth/react';
import { UseAuthInfoLoggedInProps } from '@propelauth/react/types/useAuthInfo';
import { GetUsersLessonsQuery } from '../__generated/graphql';

export default function useLessons() {
  const authInfo = useAuthInfo() as UseAuthInfoLoggedInProps;

  const [setLessons] = useGlobalStore((state) => [state.setLessons]);

  const { isLoading: loadingLessons } = useGraphQL(
    getUsersLessons,
    {
      onSuccess: ({ user }: GetUsersLessonsQuery) => {
        const transformedObservations = user?.sharedObservation?.map((obs) => {
          return {
            name: obs.name,
            id: obs.id,
            date:
              (obs.date as string) ??
              transformDateCreated(new Date().toDateString()),
            teacherId: `SK${obs.teacher?.id}`,
            teacherName: obs.teacher?.user?.name,
            avatarUrl: Avatar,
            thumbnailUrl: obs.id % 2 === 0 ? imageOne : imageTwo,
            videoDuration: 300
          };
        });
        setLessons(transformedObservations!);
      }
    },
    { propelAuthID: authInfo.user.userId }
  );

  return { loadingLessons } as const;
}
