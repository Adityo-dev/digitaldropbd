import Link from "next/link";

export const navItems = [
  { id: 1, name: "Desktop", url: "shop" },
  { id: 2, name: "Laptop", url: "shop" },
  { id: 3, name: "Component", url: "shop" },
  { id: 4, name: "Monitor", url: "shop" },
  { id: 5, name: "UPS", url: "shop" },
  { id: 6, name: "Phone", url: "shop" },
  { id: 7, name: "Tablet", url: "shop" },
  { id: 8, name: "Office Equipment", url: "shop" },
  { id: 9, name: "Camera", url: "shop" },
  { id: 10, name: "Security", url: "shop" },
  { id: 11, name: "Networking", url: "shop" },
  { id: 12, name: "Software", url: "shop" },
  { id: 13, name: "Server & Storage", url: "shop" },
  { id: 14, name: "Accessories", url: "shop" },
  { id: 15, name: "Gadget", url: "shop" },
  { id: 16, name: "Gaming", url: "shop" },
  { id: 17, name: "TV", url: "shop" },
  { id: 18, name: "Appliance", url: "shop" },
];

function BottomNavigationBar() {
  return (
    <div>
      <nav className="py-4 shadow-md border-t border-gray-300 mb-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item?.id}>
                <Link
                  href={`/${item?.url}`}
                  className="text-sm hover:underline capitalize"
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default BottomNavigationBar;
