import { Meta, StoryFn } from '@storybook/react';
import {
  FileCardsView,
  FileCardsViewProps
} from '../../components/FileCardsView';
import ImageFilePreview from '../assets/image-file.png';
import PdfFilePreview from '../assets/pdf-file.png';
import WordFilePreview from '../assets/word-file.png';

export default {
  title: 'Atoms/FileCardsView',
  component: FileCardsView
} as Meta<typeof FileCardsView>;

export const Default: StoryFn<FileCardsViewProps> = (args) => (
  <FileCardsView {...args} />
);

Default.args = {
  titleText: 'Private to teacher',
  files: [
    {
      fileName: 'File name brief.pdf',
      fileSize: 'File Size: 2.4mb',
      image: ImageFilePreview
    },
    {
      fileName: 'File name brief.pdf',
      fileSize: 'File Size: 2.4mb',
      image: PdfFilePreview
    },
    {
      fileName: 'File name brief.pdf',
      fileSize: 'File Size: 2.4mb',
      image: WordFilePreview
    },
    {
      fileName: '',
      fileSize: '',
      image: ''
    }
  ]
};
