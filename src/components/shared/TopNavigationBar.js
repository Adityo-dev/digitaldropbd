import Link from "next/link";

// TopNavigation Bar Demo data
const topNavigationData = [
  {
    id: 1,
    text: "flash sale",
    url: "/flash-sale",
  },
  {
    id: 2,
    text: "track order",
    url: "/track-order",
  },
  {
    id: 3,
    text: "about",
    url: "/about",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
  {
    id: 5,
    text: "blog",
    url: "/blog",
  },
];

function TopNavitionBar() {
  return (
    <div className="bg-black text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">Free Shipping On All Orders Over $100</p>

        <ul className="flex space-x-4">
          {topNavigationData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className="text-sm hover:underline capitalize"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopNavitionBar;
