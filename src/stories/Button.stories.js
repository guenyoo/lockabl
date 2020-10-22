import Button from '@/components/base/Button.vue';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    colorBackground: 'blue',
    text: 'Text',
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Text',
  colorBackground: 'blue',
};

export const Neutral = Template.bind({});
Neutral.args = {
  text: 'Text with <strong>HTML</strong>',
  colorBackground: 'neutral',
};

export const Yellow = Template.bind({});
Yellow.args = {
  text: 'Text',
  colorBackground: 'yellow',
};

export const Green = Template.bind({});
Green.args = {
  text: 'Text',
  colorBackground: 'green',
};
