import { mount } from "@vue/test-utils";
import ParentChildView from "@/views/ParentChildView.vue";

describe("Comunicación entre Parent-Child en ParentChildView", () => {
  it("debería recibir el texto del componente Child cuando se haga clic en el botón", async () => {
    const wrapper = mount(ParentChildView);

    const childWrapper = wrapper.findComponent({ name: "ChildComponent" }); // Encuentra el componente ChildComponent
    expect(childWrapper.exists()).toBe(true); // Verifica que el ChildComponent esté presente

    const input = childWrapper.find("input"); // Encuentra el input y simula la entrada de texto mediante el "hola mundo"
    await input.setValue("Hola Mundo");

    const button = childWrapper.find("button"); // Simula el clic en el botón de enviar //
    await button.trigger("click");

    const parentWrapper = wrapper.findComponent({ name: "ParentComponent" }); // Encuentra el componente ParentComponent dentro del wrapper //
    expect(parentWrapper.exists()).toBe(true); // Verifica que el ParentComponent esté presente

    expect(parentWrapper.text()).toContain("Hola Mundo"); // Verifica que el ParentComponent haya recibido el texto //
  });
});
