import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { z } from "zod";

const signUpForm = z.object({
  // js library to create type-safe schemas to validate data
  storeName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>; //z.infer extracts the type from the form.  SignUpForm is the TS type to be used.

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000)); //simulate response time

      toast.success("Store successfully subscribed", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch (error) {
      toast.error("Error subscribing store");
    }
  }

  return (
    <>
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant={"ghost"}>
          <Link to="/sign-in">Sign-In</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Be a partner and start managing your sales!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="storeName">Store Name:</Label>
              <Input id="storeName" type="text" {...register("storeName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Manager Name:</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail:</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Your phone:</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Create Account
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By continuing, you agree to our{" "}
              <a href="" className="underline underline-offset-4">
                terms of service
              </a>{" "}
              and{" "}
              <a href="" className="underline underline-offset-4">
                privacy policy.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
