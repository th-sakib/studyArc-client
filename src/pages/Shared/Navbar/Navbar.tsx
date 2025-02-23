import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TNavItems = {
  id: number;
  title: string;
  href: string;
};

const navItems: TNavItems[] = [
  {
    id: 1,
    title: "home",
    href: "#",
  },
  {
    id: 2,
    title: "Academic",
    href: "#",
  },
  {
    id: 3,
    title: "programs",
    href: "#",
  },
  {
    id: 4,
    title: "courses",
    href: "#",
  },
];

const Logo = () => (
  <div className="font-inter text-3xl font-bold">
    Study<span className="font-normal">Arc</span>
  </div>
);

const NavItem = ({ title, href }: { title: string; href: string }) => (
  <li className="hover:text-primary-400">
    <a href={href}>{title}</a>
  </li>
);

import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex h-12 items-center bg-primary-300/30 backdrop-blur-lg">
      <div className="my-auto flex w-full shrink-0 items-center justify-between">
        {/* logo  */}
        <Logo />
        {/* section */}
        <div className="flex gap-4">
          <nav className="capitalize">
            <ul className="text-customGray-darker flex h-full items-center gap-4 font-semibold">
              {navItems.map((item) => (
                <NavItem key={item.id} title={item.title} href={item.href} />
              ))}
            </ul>
          </nav>
          {/* profile section  */}
          <div className="flex items-center gap-4">
            <Search />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
