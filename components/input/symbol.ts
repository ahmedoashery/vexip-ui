import type { ComponentPublicInstance } from 'vue'

export type InputType = 'text' | 'password' | 'date' | 'datetime' | 'time'

export interface InputExposed extends ComponentPublicInstance {
  input?: HTMLElement | null,
  focus: (options?: FocusOptions) => void,
  blur: () => void
}
