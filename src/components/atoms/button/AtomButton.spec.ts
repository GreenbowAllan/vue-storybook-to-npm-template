import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import * as AtomButton from "./AtomButton.vue";

describe("AtomButton", () => {
  it("renders button with default props", () => {
    const wrapper = mount(AtomButton);
    expect(wrapper.get("button")).toBeTruthy();
    expect(wrapper.classes()).toContain("button");
  });

  it("applies the correct appearance classes", () => {
    const wrapper = mount(AtomButton, {
      props: {
        appearance: "primary",
      },
    });
    expect(wrapper.classes()).toContain("button-primary");
  });

  it("applies the correct width classes", () => {
    const wrapper = mount(AtomButton, {
      props: {
        width: "full",
      },
    });
    expect(wrapper.classes()).toContain("w-full");
  });

  it("applies the correct rounded classes", () => {
    const wrapper = mount(AtomButton, {
      props: {
        rounded: "md",
      },
    });
    expect(wrapper.classes()).toContain("rounded");
  });

  it("disables the button when isDisabled is true", async () => {
    const wrapper = mount(AtomButton, {
      props: {
        isDisabled: true,
      },
    });
    expect(wrapper.classes()).toContain("disabled");
  });

  it("emits a click event when clicked", async () => {
    const wrapper = mount(AtomButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
