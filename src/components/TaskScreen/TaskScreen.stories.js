import TaskScreen from './TaskScreen.svelte';

export default {
  component: TaskScreen,
  title: 'PureTaskScreen',
};

const Template = args => ({
  Component: TaskScreen,
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};