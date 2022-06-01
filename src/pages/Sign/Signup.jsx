import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Button } from "../../components/form/button";
import { Input } from "../../components/form/input";
import { Label } from "../../components/form/label";
import { routes } from "../../config/routes";
import { useGetParamsUrl } from "../../hooks";
import { Container } from "../../layouts/components/container";
import { firebaseServices } from "../../services";

const schema = yup
  .object({
    username: yup.string().required("Vui lòng nhập vào tên"),
    email: yup
      .string()
      .email("Email không đúng định dạng vui lòng thử lại")
      .required("Vui lòng nhập vào email"),
    password: yup
      .string()
      .min(8, "Mật khẩu phải tối thiểu 8 ký tự")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Mật khẩu phải tối thiểu 8 kí tự bao gồm 1 ký tự in hoa, 1 số và 1 ký tự đặc biệt",
        }
      )
      .required("Vui lòng nhập vào password"),
  })
  .required();

const Signup = () => {
  const { createAccount } = firebaseServices();
  const { url: from } = useGetParamsUrl("from");
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  const onSubmitHandler = async (values) => {
    if (!isValid) return;
    try {
      await createAccount(values.email, values.password, values.username);
      if (from !== null) {
        navigate(`${from.replace("http://" + window.location.host, "")}`);
      } else {
        navigate(`${routes.home}`);
      }
      if (isSubmitSuccessful) {
        reset({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        // autoComplete="off"
        className="max-w-[500px] mx-auto my-10 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="username" className="cursor-pointer">
            Tên
          </Label>
          <Input
            name="username"
            id="username"
            placeholder="Nhập vào tên của bạn"
            control={control}
            type="text"></Input>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <Input
            name="email"
            id="email"
            placeholder="Nhập vào địa chỉ email"
            control={control}
            type="email"></Input>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="cursor-pointer">
            Mật khẩu
          </label>
          <Input
            name="password"
            id="password"
            placeholder="Nhập vào mật khẩu"
            control={control}
            type="password"></Input>
        </div>
        <Button type="submit" isLoading={isSubmitting}>
          Đăng Ký
        </Button>
        <div className="flex items-center gap-x-2 text-sm">
          <Label className="!cursor-default">Bạn đã có tài khoản?</Label>
          <Label
            className="!text-cblue font-medium"
            onClick={() => {
              if (from !== null) {
                navigate(`/signin?from=${from}`);
              } else {
                navigate(`/signin`);
              }
            }}>
            Đăng nhập ngay
          </Label>
        </div>
      </form>
    </Container>
  );
};

export default Signup;
