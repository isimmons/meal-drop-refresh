import styled, { css } from 'styled-components';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';

import type { Inputs } from './MultiStepForm';

import { Button } from '~/components/Button';
import { Input } from '~/components/forms/Input';
import { Body } from '~/components/typography/Body';

const DisclaimerText = styled(Body)(
  ({ theme: { spacing } }) => css`
    margin-bottom: ${spacing.m};
  `
);

type Props = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  isValid: boolean;
  goToNextStep: any;
};

export const ContactDetails = ({ register, errors, isValid, goToNextStep }: Props) => {
  console.log(errors);
  return (
    <div className="form">
      <Input label="First name" placeholder="John" {...register('firstName')} />
      <Input label="Last name" placeholder="Doe" {...register('lastName')} />
      <Input label="Email" type="email" placeholder="email address" {...register('email')} />
      <Input label="Phone number" placeholder="phone number" type="tel" {...register('phone')} />
      <DisclaimerText size="XXS" type="span">
        We’ll only use your phone to call you about your order
      </DisclaimerText>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button onClick={goToNextStep} disabled={!isValid}>
          Next
        </Button>
      </div>
    </div>
  );
};
