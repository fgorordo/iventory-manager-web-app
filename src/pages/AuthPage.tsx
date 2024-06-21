
import { AuthForm, AuthWharehouseImage } from "@/components/auth-page";
import { TypographyH1, TypographyP } from "@/components/common/typography";
import { useAuthStore } from "@/hooks/useAuthStore";
import { FC, useEffect } from "react";



import { Link, useNavigate } from "react-router-dom";
import { TypographySmall } from '../components/common/typography/TypographySmall';
import { AuthStatus } from "@/models/auth";



export const AuthPage: FC = () => {

  const { startOnLogin, status, startOnChecking } = useAuthStore();
  const navigate = useNavigate();


  useEffect(() => {
    if (status === AuthStatus.CHECKING) {
      startOnChecking();
    };
  }, [status])

  useEffect(() => {
    if (status === AuthStatus.AUTHENTICATED) {
      return navigate("/dashboard", { replace: true })
    };
  }, [status]);
  

  return (
    <main className="flex min-h-screen max-h-screen">
      <section className="w-full flex items-center justify-center">
        <div className="space-y-8">
          <div className="text-center">
            <TypographyH1>Iniciar sesión</TypographyH1>
            <TypographyP>Ingresa tu correo electronico y contraseña para acceder al aplicativo.</TypographyP>
          </div>
          <AuthForm onSubmit={startOnLogin}/>
          <div className="mt-4 text-center text-sm">
            <TypographySmall>¿Es la primera vez que inicias sesión?{" "}</TypographySmall>
            <Link to="#" className="underline">
              Solicitar código acceso
            </Link>
          </div>
        </div>
      </section>
      <AuthWharehouseImage />
    </main>
  )
}