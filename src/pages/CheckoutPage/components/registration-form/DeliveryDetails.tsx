import { useNavigate } from 'react-router-dom';
import type { UseFormRegister, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

import type { Inputs } from './MultiStepForm';

import { saveOrderAction } from '~/app-state/order';
import { useAppDispatch, useAppSelector } from '~/app-state';
import { clearCartAction, selectCartItems } from '~/app-state/cart';
import { Button } from '~/components/Button';
import { Input } from '~/components/forms/Input';

type Props = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  goToPrevStep: any;
};

export const DeliveryDetails = ({
  register,
  errors,
  isValid,
  handleSubmit,
  goToPrevStep,
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const onCompleteOrder = (data: Inputs) => {
    console.log(data);
    dispatch(saveOrderAction(cartItems));
    dispatch(clearCartAction());
    navigate('/success');
  };
  console.log(errors);
  return (
    <div className="form">
      <Input
        label="Streetname and housenumber"
        placeholder="Some street, 13"
        {...register('address')}
      />
      <Input
        label="Postcode"
        placeholder="AAAAXX"
        {...register('postcode', { required: 'Postcode is required...' })}
      />
      <Input label="City" placeholder="Amsterdam" {...register('city')} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button clear onClick={goToPrevStep}>
          Previous
        </Button>
        {errors.postcode && <p style={{ color: 'red' }}>{errors.postcode.message}</p>}
        <Button onClick={handleSubmit(onCompleteOrder)} disabled={!isValid}>
          Complete order
        </Button>
      </div>
    </div>
  );
};
