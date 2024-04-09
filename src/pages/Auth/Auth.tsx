import { useForm } from "react-hook-form";
import Label from "../../general/components/Label";
import LoginInput from "../../general/components/LoginInput";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleProvider, auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const onSubmit = (data: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => navigate("/"))
      .catch(() => {
        createUserWithEmailAndPassword(auth, data.email, data.password).then(
          (credential) => {
            if (credential.user) {
              navigate("/");
            }
          }
        );
      });
  };

  useEffect(() => {
    if (auth.currentUser) {
      navigate("/");
    }
  }, []);

  const authGoogle = () => {
    signInWithPopup(auth, GoogleProvider).then((userCredintal) => {
      if (userCredintal.user) {
        navigate("/");
        console.log(userCredintal.user);
      }
    });
  };
  return (
    <main className="min-h-[calc(100dvh-80px)] w-full flex justify-center overflow-hidden">
      <Toaster position="top-right" richColors />
      <div className="pt-10 max-w-[400px] w-full px-6">
        <h1 className=" dark:text-white text-3xl text-center text-black font-semibold mb-5">
          Authentication
        </h1>
        <form
          className="flex flex-col gap-4 min-w-full "
          onSubmit={handleSubmit((data: any) => onSubmit(data))}
        >
          <div className="grid">
            <Label>Email</Label>
            <div className="relative dark:text-purple text-purpleLight">
              <LoginInput
                type="mail"
                name="email"
                form={register}
                className=" pr-14 text-black"
              />
              <svg
                className="absolute top-1/2 -translate-y-1/2 right-4"
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
              </svg>
            </div>
          </div>
          <div className="grid">
            <Label>Password</Label>

            <div className="relative dark:text-purple text-purpleLight">
              <LoginInput
                type={show ? "text" : "password"}
                name="password"
                form={register}
                className=" pr-14 text-black"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setShow(!show)}
                className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-4"
                width={30}
                fill="currentColor"
              >
                <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path>
              </svg>
            </div>
          </div>

          <button
            className="py-3 px-6 dark:bg-purple rounded-md active:scale-95 font-bold dark:text-white transition-all mx-auto inline-block lg:hover:opacity-75 bg-purpleLight text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
        <span className="block text-center  mt-4">
          <Label>or</Label>
        </span>
        <button
          type="button"
          onClick={() => authGoogle()}
          className="py-2 px-5 flex items-center bg-white text-purpleLight font-bold mx-auto mt-2 rounded-md dark:bg-[transparent] border-[2px] dark:border-purple border-purpleLight dark:text-white active:scale-90 transition-all"
        >
          Auth with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={30}
            fill="currentColor"
          >
            <path d="M12 11H20.5329C20.5769 11.3847 20.6 11.7792 20.6 12.1837C20.6 14.9184 19.6204 17.2204 17.9224 18.7837C16.4367 20.1551 14.404 20.9592 11.9796 20.9592C8.46933 20.9592 5.43266 18.947 3.9551 16.0123C3.34695 14.8 3 13.4286 3 11.9796C3 10.5306 3.34695 9.1592 3.9551 7.94698C5.43266 5.01226 8.46933 3 11.9796 3C14.4 3 16.4326 3.88983 17.9877 5.33878L16.5255 6.80101C15.3682 5.68153 13.8028 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.5265 19 18.1443 16.3923 18.577 13H12V11Z"></path>
          </svg>
        </button>
      </div>
    </main>
  );
};

export default Auth;
