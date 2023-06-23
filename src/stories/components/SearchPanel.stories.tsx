import { Meta, StoryFn } from '@storybook/react';
import SearchPanel, {
  type SearchPanelProps
} from '../../components/SearchPanel';

const meta: Meta = {
  title: 'Atoms/SearchPanel',
  component: SearchPanel
};

export default meta;

const Template: StoryFn<SearchPanelProps> = (args) => <SearchPanel {...args} />;

export const Default = Template.bind({});

Default.args = {
  activeView: 'grid',
  setActiveView: () => {}
};
