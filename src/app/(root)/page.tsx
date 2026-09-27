import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  return (
    <>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>

      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
        className="px-10 pt-25"
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
