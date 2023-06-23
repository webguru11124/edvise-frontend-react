import { gql } from 'graphql-request';

export const createFocusAreaMutation = gql`
  mutation createFocusArea(
    $rubric_id: Int!
    $title: String!
    $type: FocusAreaType!
    $description: String!
    $addToBottom: Boolean
  ) {
    createFocusArea(
      title: $title
      rubric_id: $rubric_id
      type: $type
      description: $description
      addToBottom: $addToBottom
    ) {
      id
      title
      description
      moment {
        id
      }
      focusAreaNote {
        id
        content
      }
      focusAreaScore {
        id
        score
      }
    }
  }
`;

export const deleteFocusAreaMutation = gql`
  mutation deleteFocusArea($id: Int!) {
    deleteFocusArea(id: $id) {
      id
    }
  }
`;

export const updateFocusAreaMutation = gql`
  mutation updateFocusArea(
    $id: Int!
    $title: String
    $rubric_id: Int
    $type: FocusAreaType
  ) {
    updateFocusArea(
      id: $id
      title: $title
      rubric_id: $rubric_id
      type: $type
    ) {
      id
      title
    }
  }
`;

export const createFocusAreaNoteMutation = gql`
  mutation createFocusAreaNote(
    $focusArea_id: Int!
    $content: String!
    $type: FocusAreaNoteType!
  ) {
    createFocusAreaNote(
      content: $content
      focusArea_id: $focusArea_id
      type: $type
    ) {
      id
      content
      type
      focusArea_id
    }
  }
`;

export const updateFocusAreaNoteMutation = gql`
  mutation updateFocusAreaNote(
    $id: Int!
    $content: String
    $focusArea_id: Int
    $type: FocusAreaNoteType
  ) {
    updateFocusAreaNote(
      id: $id
      content: $content
      focusArea_id: $focusArea_id
      type: $type
    ) {
      id
      content
      focusArea_id
      type
    }
  }
`;

export const deleteFocusAreaNoteMutation = gql`
  mutation deleteFocusAreaNote($id: Int!) {
    deleteFocusAreaNote(id: $id) {
      id
      content
      type
      focusArea_id
    }
  }
`;

export const createMomentMutation = gql`
  mutation createMoment(
    $focusArea_id: Int!
    $observation_id: Int!
    $type: MomentType!
  ) {
    createMoment(
      focusArea_id: $focusArea_id
      observation_id: $observation_id
      type: $type
    ) {
      id
      type
    }
  }
`;

export const createTranscriptMomentMutation = gql`
  mutation createTranscriptMoment(
    $startTime: Int!
    $endTime: Int!
    $moment_id: Int!
    $speaker: String!
    $text: String!
    $type: TranscriptMomentType!
  ) {
    createTranscriptMoment(
      startTime: $startTime
      endTime: $endTime
      moment_id: $moment_id
      speaker: $speaker
      text: $text
      type: $type
    ) {
      id
      startTime
      endTime
      moment_id
      speaker
      text
      type
    }
  }
`;

export const deleteMomentMutation = gql`
  mutation deleteMomentMutation($id: Int!) {
    deleteMoment(id: $id) {
      id
    }
  }
`;

export const createVideoNoteMutation = gql`
  mutation createVideoNoteMutation(
    $content: String!
    $observation_id: Int!
    $timestamp: Int!
  ) {
    createVideoNote(
      content: $content
      observation_id: $observation_id
      timestamp: $timestamp
    ) {
      id
      content
      timestamp
    }
  }
`;

export const updateVideoNoteMutation = gql`
  mutation updateVideoNoteMutation(
    $content: String
    $id: Int!
    $observation_id: Int
    $timestamp: Int
  ) {
    updateVideoNote(
      id: $id
      content: $content
      observation_id: $observation_id
      timestamp: $timestamp
    ) {
      id
    }
  }
`;

export const deleteVideoNoteMutation = gql`
  mutation deleteVideoNoteMutation($id: Int!) {
    deleteVideoNote(id: $id) {
      id
    }
  }
`;

export const updateFocusAreaScoreMutation = gql`
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

export const addMomentToFocusAreasMutation = gql`
  mutation addMomentToFocusAreasMutation(
    $focusArea_ids: [Int!]!
    $moment_id: Int!
  ) {
    addMomentToFocusAreas(
      focusArea_ids: $focusArea_ids
      moment_id: $moment_id
    ) {
      result
    }
  }
`;

export const removeMomentFromFocusAreasMutation = gql`
  mutation removeMomentFromFocusAreas(
    $focusArea_ids: [Int!]!
    $moment_id: Int!
  ) {
    removeMomentFromFocusAreas(
      focusArea_ids: $focusArea_ids
      moment_id: $moment_id
    ) {
      result
    }
  }
`;

export const createObservationMutation = gql`
  mutation createObservationMutation(
    $collaborator_id: Int
    $date: Date
    $name: String!
    $teacher_id: Int!
    $type: ObservationType!
    $videoFile: Int
    $organization_id: Int!
    $param: String
  ) {
    createObservation(
      collaborator_id: $collaborator_id
      date: $date
      name: $name
      teacher_id: $teacher_id
      type: $type
      videoFile: $videoFile
      param: $param
      organization_id: $organization_id
    ) {
      id
    }
  }
`;
