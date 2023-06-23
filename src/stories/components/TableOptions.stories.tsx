import { Meta, StoryFn } from '@storybook/react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import type { DropDownMenuTypes } from '../../components/DropdownMenu';
import { DropdownMenu } from '../../components/DropdownMenu';

export default {
  title: 'Atoms/DropdownMenu',
  component: DropdownMenu
} as Meta<typeof DropdownMenu>;

const Template: StoryFn<DropDownMenuTypes> = (args) => (
  <DropdownMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      title: 'Change Role',
      action: () => {
        /* */
      }
    },
    {
      title: 'Delete',
      action: () => {
        /*  */
      }
    }
  ],
  icon: <MoreHorizIcon />
};
