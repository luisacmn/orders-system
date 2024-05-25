import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


import {z} from 'zod'

const signInForm = z.object({   // js library to create type-safe schemas to validate data
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>  //z.infer extracts the type from the form.  SignInForm is the TS type to be used.

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
  
      toast.success('A link has been sent to your email',{
        action: {
          label: 'Resend',
          onClick: () => handleSignIn(data)
        },
      })
    } catch (error) {
      toast.error('Invalid credentials')
    }
   
  }

    return (
        <>
          <div className="p-8">
            <div className="flex w-[350px] flex-col justify-center gap-6">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Access Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Manage your sales on partner dashboard
                </p>
              </div>
    
              <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                <div className="space-y-2">
                  <Label htmlFor="email">Your e-mail:</Label>
                  <Input id="email" type="email" {...register('email')}/>
                </div>
    
                <Button disabled={isSubmitting} className="w-full" type="submit">
                  Access Dashboard
                </Button>
              </form>
            </div>
          </div>
        </>
      )
}