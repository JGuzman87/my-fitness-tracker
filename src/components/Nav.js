import Link from "next/link";

const Nav = () => {
  const links = ["dashboard", "stats", "meals"];
  return (
    <nav className="bg-blue-100 flex p-2 gap-4">
      <ul className="flex gap-4 p-4 capitalize">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {links.map((link) => (
          <li>
            <Link href={`/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
