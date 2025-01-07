import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface MediaLinkProps extends ComponentProps<"button"> {
  Icon: React.ComponentType;
  link: string;
}

export const MediaLink = ({ Icon, link, ...props }: MediaLinkProps) => {
  return (
    <Link href={link} target="_blank">
      <button {...props} className={twMerge("rounded-[100%] bg-white p-1", props.className)}>
        <Icon />
      </button>
    </Link>
  );
};

interface MediaLink2Props extends ComponentProps<"button"> {
  Icon: React.ComponentType<{ className?: string }>;
  link: string;
  iconClassName?: string;
  title?: string;
}
export const MediaLink2 = ({ Icon, link, iconClassName, ...props }: MediaLink2Props) => {
  return (
    <a href={link} target="_blank">
      <button className={"rounded-[100%] bg-white p-1"} title="Download CV" {...props}>
        <Icon className={iconClassName} />
      </button>
    </a>
  );
};
