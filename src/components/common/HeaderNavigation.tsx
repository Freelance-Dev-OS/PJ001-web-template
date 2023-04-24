export interface HeaderNavigation {
   className?:string;
}


export function HeaderNavigation({className}: HeaderNavigation) {
  const navMenuData = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "services",
      link: "#",
    },
    {
      title: "karriere",
      link: "#",
    },
    {
      title: "Jobs",
      link: "#",
    },
    {
      title: "About",
      link: "#",
    },
    {
      title: "Kontakt",
      link: "#",
    },
  ];

  return (
    <div className={` ${className} fixedleft-0 bottom-0 right-0 pt-[calc(155px-75px)] min-h-screen bg-primary-main md:hidden`}>
      <ul className="flex flex-col gap-[36px] pl-[32px]">
        {navMenuData.map((item) => (
          <li className="" key={item.title}>
            <a
              className="block normal font-bold text-[44px] leading-[48px] text-[#FFFFFF] uppercase no-underline"
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
