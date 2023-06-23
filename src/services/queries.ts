import { gql } from 'graphql-request';
import { graphql } from '../__generated';

export const getObservationsQuery = graphql(`
  query observations($id: Int!) {
    observation(id: $id) {
      moment {
        id
        type
        analyticsMoment {
          id
          data
        }
        transcriptMoment {
          id
          startTime
          endTime
          speaker
          text
        }
      }
      rubric {
        id
        focusArea {
          id
          type
          title
          moment {
            id
            type
            analyticsMoment {
              id
            }
            transcriptMoment {
              id
              startTime
              endTime
              speaker
              text
            }
          }
          focusAreaScore {
            id
            title
            focusArea_id
            description
            selected
            score
          }
          focusAreaNote {
            id
            content
            type
            focusArea_id
          }
        }
      }
      videoNote {
        id
        content
        timestamp
      }
      generatedPrompt {
        id
        title
        content
      }
    }
  }
`);

export const updateFocusAreaScore = gql`
  mutation updateFocusAreaScore(
    $id: Int!
    $score: Int
    $selected: Boolean
    $title: String
    $focusArea_id: Int
    $description: String
  ) {
    updateFocusAreaScore(
      id: $id
      description: $description
      focusArea_id: $focusArea_id
      score: $score
      title: $title
      selected: $selected
    ) {
      id
      title
      selected
      description
    }
  }
`;

export const addUser = gql`
  mutation addUser(
    $email: String!
    $name: String!
    $password: String!
    $invite_token: String!
  ) {
    createUser(
      email: $email
      name: $name
      password: $password
      invite_token: $invite_token
    ) {
      id
      name
      email
      type
    }
  }
`;

export const getAdminUsers = graphql(`
  query adminUsers($pageNumber: Int, $pageSize: Int) {
    users(pageNumber: $pageNumber, pageSize: $pageSize) {
      id
      email
      type
      name
    }
  }
`);

// This is split out temporarily. We will be removing this code soon
export const getUsers = graphql(`
  query users {
    users {
      id
      email
      type
      name
    }
  }
`);

export const usersObservation = graphql(`
  query userObservations {
    observations {
      id
      date
      name
      type
      teacher {
        id
        user {
          id
          name
        }
      }
    }
  }
`);

export const getLoggedInUser = graphql(`
  query getLoggedInUser($propelAuthID: String) {
    user(propelAuthID: $propelAuthID) {
      id
      propelauth_id
      name
      type
      email
      organization {
        id
        name
      }
      teacherUser {
        id
      }
    }
  }
`);

export const getUsersLessons = graphql(`
  query getUsersLessons($propelAuthID: String) {
    user(propelAuthID: $propelAuthID) {
      id
      sharedObservation {
        id
        date
        name
        type
        teacher {
          id
          user {
            id
            name
          }
        }
      }
    }
  }
`);

export const getRubricsQuery = graphql(`
  query rubrics {
    observations {
      id
      rubric {
        id
        name
      }
    }
  }
`);
