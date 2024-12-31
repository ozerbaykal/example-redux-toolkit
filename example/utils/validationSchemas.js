import * as Yup from "yup";

const newUserSchema = Yup.object().shape({

    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    surname: Yup.string().required("Zorunlu alan")
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('gecerli mail giriniz'),
    phoneNumber: Yup.string().max(20, "max 20").min(11, "min 11").required("geçerli bir telefon giriniz"),
    gender: Yup.string().required("Zorunlu alan"),
    age: Yup.number().min(18, "min 18").max(80, "max80").required("yaş giriniz"),

})
export { newUserSchema };
