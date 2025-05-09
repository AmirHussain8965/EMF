import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Step1Data {
  businessName: string;
  businessTagline: string;
  businessLogo: {
    name: string;
    data: string;
  } | null;
  operatingHours: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  textEditorData: string;
}

interface Step2Data {
  domainName: string;
  domainType: string;
}

interface Step3Data {
  templateId: string;
}

interface Step4Data {
  colors: string[];
  sections: string[];
}

interface Step5Data {
  inventory: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

interface Step6Data {
  paymentMethod: string;
  transactionId: string;
}


interface FormState {
  step1: Partial<Step1Data>;
  step2: Partial<Step2Data>;
  step3: Partial<Step3Data>;
  step4: Partial<Step4Data>;
  step5: Partial<Step5Data>;
  step6: Partial<Step6Data>;
}

const initialState: FormState = {
  step1: {},
  step2: {},
  step3: {},
  step4: {},
  step5: {},
  step6: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateStepData: (
      state,
      action: PayloadAction<{
        step: keyof FormState;
        data: any;
      }>
    ) => {
      const { step, data } = action.payload;
      state[step] = { ...state[step], ...data };
    },
    resetForm: () => initialState,
  },
});

export const { updateStepData, resetForm } = formSlice.actions;
export default formSlice.reducer;

