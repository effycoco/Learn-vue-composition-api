import { ref } from 'vue';
import { useEventListener } from './event';
// composable 通常以 "use" 开头
export function useMouse() {
  const x = ref(0);
  const y = ref(0);
  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上来启动和卸载副作用
  useEventListener(window, 'mousemove', update);
  return { x, y };
}
