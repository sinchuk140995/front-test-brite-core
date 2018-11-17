import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Home from '../../src/components/Home.vue';
import VueResource from 'vue-resource'
import Vue from 'vue';
Vue.use(VueResource);

describe('Home.vue', () => {
  const wrapper = mount(Home);
  it('has a root element with class foo', () => {
    expect(wrapper.is('.foo')).to.equal(true)
  })
})
