import Link from "next/link";

const Nav = () => {
  const links = ["dashboard", "stats", "meals"];
  return (
    <nav className="bg-blue-100 flex w-full justify-between p-2 gap-4">
      <h1 className="text-2xl font-bold self-center">My Fitness Tracker</h1>
      <ul className="flex gap-4 p-4 capitalize">
        <li>
          <Link href={"/"}>home</Link>
        </li>
        {links.map((link) => (
          <li key={link}>
            <Link href={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
