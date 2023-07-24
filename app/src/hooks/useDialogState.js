import { ref } from 'vue';

export function useDialogState() {
    const state = ref(false);
    const show = () => state.value = true;
    const hide = () => state.value = false;

    return{
        state,
        show,
        hide
    }
}