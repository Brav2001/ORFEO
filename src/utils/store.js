import { create } from "zustand";

export const useStore = create((set) => ({
  logged: false,
  firstPass: false,
  captcha: false,
  number: false,
  captchaId: null,
  loading: false,
  loadingValue: 0,
  loadingItem: "",
  ChangeLogged: (value) => set((state) => ({ logged: value })),
  ChangeFirstPass: (value) => set((state) => ({ firstPass: value })),
  ChangeCaptchaId: (value) => set((state) => ({ captchaId: value })),
  ChangeNumber: (value) => set((state) => ({ number: value })),
  ChangeLoading: (value) => set((state) => ({ loading: value })),
  ChangeLoadingValue: (value) => set((state) => ({ loadingValue: value })),
  ChangeLoadingItem: (value) => set((state) => ({ loadingItem: value })),
}));
