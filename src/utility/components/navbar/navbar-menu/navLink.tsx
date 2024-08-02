import Link from "next/link";

export default function navLink({ children, href, ...props }) {
  return (
    <Link
      href={href}
      className="block whitespace-nowrap py-2 px-3 content-center text-white hover:text-blue-300"
    >
      {children}
    </Link>
  );
}
