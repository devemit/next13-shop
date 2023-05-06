import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ultra Shop
            </span>
          </Link>
          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              //  add log-in component
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <Link
                href="/"
                className="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Company
              </Link>
              <Link
                href="#"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Team
              </Link>
              <Link
                href="/products"
                className="text-gray-900 dark:text-white hover:underline"
              >
                Products
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
