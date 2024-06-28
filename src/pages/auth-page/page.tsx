import { useAuthStore } from "@/hooks/useAuthStore";
import { FC, useEffect } from "react";



import { AuthStatus } from "@/models/auth";
import { Link, useNavigate } from "react-router-dom";
import { AuthForm, AuthWharehouseImage } from "./components";



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
            <h1>Iniciar sesión</h1>
            <p>Ingresa tu correo electronico y contraseña para acceder al aplicativo.</p>
          </div>
          <AuthForm onSubmit={startOnLogin}/>
          <div className="mt-4 text-center text-sm">
            <p>¿Es la primera vez que inicias sesión?{" "}</p>
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