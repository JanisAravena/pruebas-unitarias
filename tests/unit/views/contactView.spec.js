import { shallowMount } from "@vue/test-utils";
import ContactView from "@/views/ContactView.vue";

describe("ContactView", () => {
  test("Coincide con el snapshot", () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.element).toMatchSnapshot();
  });
});