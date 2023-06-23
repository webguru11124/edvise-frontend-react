import { Meta, StoryFn } from '@storybook/react';
import Skeleton, { SkeletonProps } from 'Elements/Skeleton';

export default {
  title: 'Elements/Skeleton',
  component: Skeleton
} as Meta;

/* Rectangle with content */
const RectangleWithContentTemplate: StoryFn<SkeletonProps> = (args) => (
  <Skeleton {...args}>
    <div style={{ width: 400, height: 300, background: 'red' }}>
      <h4>This is example</h4>
    </div>
  </Skeleton>
);

export const RectangleWithContent = RectangleWithContentTemplate.bind({});

RectangleWithContent.args = {
  variant: 'rectangular',
  lines: 4,
  isLoading: true
};

/* Text */
const TextTemplate: StoryFn<SkeletonProps> = (args) => (
  <Skeleton {...args}>
    <h4>This is example</h4>
  </Skeleton>
);

export const Text = TextTemplate.bind({});

Text.args = {
  variant: 'text',
  lines: 4,
  isLoading: true
};

/* Image */
const ImageTemplate: StoryFn<SkeletonProps> = (args) => (
  <Skeleton {...args}>
    <div style={{ width: 400, height: 300, background: 'red' }}>
      <h4>This is example</h4>
    </div>
  </Skeleton>
);

export const Image = ImageTemplate.bind({});

Image.args = {
  variant: 'image',
  lines: 4,
  isLoading: true
};

/* Circular */
const CircularTemplate: StoryFn<SkeletonProps> = (args) => (
  <Skeleton {...args}>
    <div
      style={{
        width: 400,
        height: 400,
        background: 'red',
        borderRadius: '50%'
      }}
    />
  </Skeleton>
);

export const Circular = CircularTemplate.bind({});

Circular.args = {
  variant: 'circular',
  lines: 4,
  isLoading: true
};
