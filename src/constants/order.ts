import { OrderFormData, OrderFormField } from '@types';

const createField = (
  id: keyof OrderFormData,
  label: string,
  placeholder: string
): OrderFormField => ({
  id,
  label,
  placeholder,
});

export const ORDER_FORM_FIELDS: OrderFormField[] = [
  createField('user', '성함/연락처', '성함과 연락처를 입력해주세요'),
  createField('pickup', '픽업 날짜/요일/시간', '픽업 일정을 입력해주세요'),
  createField('size', '사이즈', '사이즈를 입력해주세요'),
  createField('flavor', '맛', '맛을 입력해주세요'),
];
