import { mount } from "@vue/test-utils";
import ContadorComponent from "@/components/ContadorComponent.vue";
import store from "@/store";

describe("ContadorComponent.vue", () => {
  beforeEach(() => {
    store.state.contador = 0; // Reinicia el estado antes de cada prueba //
  });

  it("Renderiza el valor inicial en 0", () => {
    const wrapper = mount(ContadorComponent, { global: { plugins: [store] } }); // Registra el plugin store (que es la instancia de Vuex) globalmente para que el ContadorComponent pueda acceder a él durante las pruebas. //
    expect(wrapper.find(".counter").text()).toBe("0"); // Busca que el valor inicial del contador sea 0 //
  });

  it('Aumenta el contador al hacer clic en "Aumentar"', async () => {
    const wrapper = mount(ContadorComponent, { global: { plugins: [store] } });
    await wrapper.find(".btn.primary").trigger("click"); // Simula un click en el botón aumentar//
    expect(store.state.contador).toBe(1); // Se espera que el contador aumente 1 //
  });

  it('Disminuye el contador al hacer clic en "Disminuir"', async () => {
    store.state.contador = 1;
    const wrapper = mount(ContadorComponent, { global: { plugins: [store] } });
    await wrapper.find(".btn.warning").trigger("click"); // Simula un click en el botón disminuir//
    expect(store.state.contador).toBe(0); // Se espera que el contador disminuya en 1 //
  });
});

it("No permite que el contador de valor -1", async () => {
  const wrapper = mount(ContadorComponent, { global: { plugins: [store] } });
  await wrapper.find(".btn.warning").trigger("click");
  expect(store.state.contador).toBe(0); // Se espera que el contador siga siendo 0
});

//global: { plugins: [store] }: Como el componente depende de Vuex para funcionar correctamente,se proporciona el plugin al componente durante las pruebas //
// Otra opción seria traer del store directamente mediante props//
