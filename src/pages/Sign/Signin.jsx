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
import { handleReplaceUrl } from "../../utils";


const schema = yup
  .object({
    email: yup
      .string()
      .email("Email không đúng định dạng vui lòng thử lại")
      .required("Vui lòng nhập vào email"),
    password: yup
      .string()
      .min(8, "Mật khẩu phải tối thiểu 8 ký tự")
      .required("Vui lòng nhập vào password"),
  })
  .required();

const Signin = () => {
  const { signInAccount } = firebaseServices();
  const navigate = useNavigate();
  const { url: from } = useGetParamsUrl("from");

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

 
  const onSubmitHandler = async (values) => {
    if (!isValid) return;
    try {
      await signInAccount(values.email, values.password);
      if (from !== null) {
        navigate(`${handleReplaceUrl(from)}`);
      } else {
        navigate(`${routes.home}`);
      }
      if (isSubmitSuccessful) {
        reset({
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
          Đăng Nhập
        </Button>
        <div className="flex items-center gap-x-2 text-sm">
          <Label className="!cursor-default">Bạn chưa có tài khoản?</Label>
          <Label
            onClick={() => {
              if (from !== null) {
                navigate(`/signup?from=${from}`);
              } else {
                navigate(`/signup`);
              }
            }}
            className="font-medium !text-cblue">
            Đăng ký ngay
          </Label>
        </div>
      </form>
    </Container>
  );
};

export default Signin;
