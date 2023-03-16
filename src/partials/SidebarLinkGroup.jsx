import React, { useState } from 'react';

function SidebarLinkGroup({
  children,
  activecondition,
}) {

  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <li className={`px-6 py-4 rounded-sm mb-0.5 last:mb-0 ${activecondition && 'bg-green'}`}>
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;