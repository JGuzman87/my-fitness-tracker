import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-blue-100 flex p-2 gap-4">
      <ul className="flex gap-4 p-4">
        <li>
          <Link href={"/"}>
            <p>Home Page</p>
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"}>
            <p className="">Dashboard</p>
          </Link>
        </li>
        <li>
          <Link href={"/body_stats"}>
            <p>Body Stats</p>
          </Link>
        </li>

        <li>
          <Link href={"/meals"}>
            <p>Meals</p>
          </Link>
        </li>
        <li>
          <Link href={"/weight"}>
            <p>Weight</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
