import { Meta, StoryFn } from '@storybook/react';
import { FileCard, FileCardProps } from '../../components/FileCard';
import ImageFilePreview from '../assets/image-file.png';
import PdfFilePreview from '../assets/pdf-file.png';
import WordFilePreview from '../assets/word-file.png';

export default {
  title: 'Atoms/FileCard',
  component: FileCard
} as Meta<typeof FileCard>;

const Template: StoryFn<FileCardProps> = (args) => <FileCard {...args} />;

export const Default = Template.bind({});

export const ImageFile = Template.bind({});
ImageFile.args = {
  fileName: 'File Name Brief.pdf',
  fileSize: 'File Size: 2.4mb',
  image: ImageFilePreview
};

export const PdfFile = Template.bind({});
PdfFile.args = {
  fileName: 'File Name Brief.pdf',
  fileSize: 'File Size: 2.4mb',
  image: PdfFilePreview
};

export const WordFile = Template.bind({});
WordFile.args = {
  fileName: 'File Name Brief.pdf',
  fileSize: 'File Size: 2.4mb',
  image: WordFilePreview
};
