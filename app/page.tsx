import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-gradient-to-tr from-cyan-500 to-cyan-900">
      <h1 className="text-primary-foreground text-3xl font-medium mb-2">
        NextJs Next Auth Setup
      </h1>
      <LoginButton>
        <Button variant={"secondary"}>SignIn</Button>
      </LoginButton>
    </main>
  );
}
