import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("AboutView", () => {
  test("Coincide con el snapshot", () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.element).toMatchSnapshot();
  });
});