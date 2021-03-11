import React from 'react';

import { ButtonTeste1 } from './ButtonTeste';

export default {
  title: 'Example/ButtonTest',
  component: ButtonTeste1,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonTeste1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
