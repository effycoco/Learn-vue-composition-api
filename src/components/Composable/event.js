// 将添加和清除DOM事件监听器的逻辑也封装进一个组合式函数中
import { onMounted, onUnmounted } from 'vue';

export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
