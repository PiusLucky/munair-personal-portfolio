import React from "react";

function Header({
  title,
  description = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium",
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-2xl md:text-[55px] font-semibold mb-10 text-center">
        {title}
      </p>
      <p className="text-[21px] text-center">{description}</p>
    </div>
  );
}

export default Header;
