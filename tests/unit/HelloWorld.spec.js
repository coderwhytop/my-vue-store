import { shallowMount } from "@vue/test-utils"
import HelloWorld from "@/components/Sync/HelloWorld.vue"

// 模拟 axios 模块 :必须写在外面，不能写在describe里或it函数里
// 解决import axios的问题，是异步的 不写会报错
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ statusText: "Mock response" }))
}))

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message"
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
