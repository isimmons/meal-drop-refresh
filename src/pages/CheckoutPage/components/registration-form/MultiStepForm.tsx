import styled, { css } from 'styled-components';
import { useStep } from 'usehooks-ts';
import { useForm } from 'react-hook-form';

import { ContactDetails } from './ContactDetails';
import { DeliveryDetails } from './DeliveryDetails';
import { StepIndicator } from './StepIndicator';

type Step = {
  id: string;
};

const steps: Step[] = [{ id: 'Contact details' }, { id: 'Delivery details' }];

export type Inputs = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postcode: string;
  email: string;
  phone: string;
};

const getCurrentStep = (step: string, props: any) => {
  switch (step) {
    case 'Contact details':
      return <ContactDetails {...props} />;
    case 'Delivery details':
      return <DeliveryDetails {...props} />;
    default:
      return null;
  }
};

const FormContainer = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    width: 100%;
    min-height: 480px;
    margin-right: 1.5rem;
    background: ${color.formBackground};
    padding: 1.5rem;
    border-radius: ${borderRadius.s};
  `
);

export const MultiStepForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  const [currentStep, helpers] = useStep(2);
  const { goToNextStep, goToPrevStep } = helpers;

  const currentStepId = () => {
    return currentStep === 1 ? steps[0].id : steps[1].id;
  };

  const props = { register, handleSubmit, errors, isValid, goToNextStep, goToPrevStep };

  return (
    <FormContainer>
      <StepIndicator
        title={currentStepId()}
        currentStep={currentStep}
        amountOfSteps={steps.length}
      />
      {getCurrentStep(currentStepId(), props)}
    </FormContainer>
  );
};
