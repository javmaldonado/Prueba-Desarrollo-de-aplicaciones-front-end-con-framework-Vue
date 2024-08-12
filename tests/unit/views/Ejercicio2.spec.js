import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContadorView from "@/views/ContadorView.vue";
import ParentChildView from "@/views/ParentChildView.vue";

describe("HomeView.vue", () => {
  it("existe componente", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.exists()).toBe(true); // Verifica que el wrapper existe, lo que implica si pasa o no la prueba //
  });
});

describe("AboutView.vue", () => {
  it("existe componente", () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("ContadorView.vue", () => {
  it("existe componente", () => {
    const wrapper = shallowMount(ContadorView);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("ParentChildView.vue", () => {
  it("existe componente", () => {
    const wrapper = mount(ParentChildView);
    expect(wrapper.exists()).toBe(true);
  });
});

//shallowMount es adecuado para cuando no se montan componentes hijos, de otra manera utilizar mount //
//wrapper.exist() verifica que el wrapper existe, no requiere buscar dentro de otro componente //
