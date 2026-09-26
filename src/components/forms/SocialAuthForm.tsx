import Image from "next/image";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "min-h-12 flex-1 rounded-2 background-dark400_light900 px-4 py-3.5 body-medium text-dark200_light800";

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain invert-colors"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
