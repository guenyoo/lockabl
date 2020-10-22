import { shallowMount } from '@vue/test-utils';
import Lock from '@/components/Lock.vue';

describe('Lock.vue', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 1,
      hasConnectivity: true,
      name: 'Bike',
    };
  });

  it('matches the snapshot', () => {
    const wrapper = shallowMount(Lock, {
      propsData: props,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('displays heart icon when it is a favorite', () => {
    const wrapper = shallowMount(Lock, {
      propsData: {
        ...props,
        isFavorite: true,
      },
    });
    expect(wrapper.find('.lock__favorite').exists()).toBe(true);
  });

  it('does not display heart icon when it is not a favorite', () => {
    const wrapper = shallowMount(Lock, {
      propsData: {
        ...props,
        isFavorite: false,
      },
    });
    expect(wrapper.find('.lock__favorite').exists()).toBe(false);
  });
});
