import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  test("Coincide con el snapshot", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.element).toMatchSnapshot();
  });
});