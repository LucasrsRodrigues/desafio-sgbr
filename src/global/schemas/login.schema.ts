import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  user: Yup.string().required("Username é obrigatório"),
  password: Yup.string().required('Senha é obrigatória'),
});

type ILoginDTO = Yup.InferType<typeof loginSchema>;

export { loginSchema, ILoginDTO }