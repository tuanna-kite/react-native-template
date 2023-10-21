import { date, number, object, string } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = object({
  phone: string()
    // .length(10, "Số điện thoại không đúng")
    .matches(phoneRegExp, "Số điện thoại không đúng")
    .required(),
  password: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
  repassword: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
});

export const fillProfileSchema = object({
  fullname: string().required("Bạn phải điền đầy đủ tên"),
  birthday: date().required("Ngày sinh không hợp lệ"),
  gender: number(),
  email: string().email("Email không hợp lệ").required("Bạn phải điền đầy email"),
});

export const changePasswordSchema = object({
  password: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
  newPassword: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
  reNewPassword: string().min(8, "Mật khẩu phải tối thiểu 8 ký tự").required(),
});

export function onInputChange<FieldType>(
  field: keyof FieldType,
  setDataForm: any,
  dataForm: FieldType
) {
  return function (value: any) {
    setDataForm({
      ...dataForm,
      [field]: value,
    });
  };
}
