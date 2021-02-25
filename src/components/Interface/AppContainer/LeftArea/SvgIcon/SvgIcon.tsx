import { SVGProps } from "react";

interface SvgIconProps {
  svg: SVGProps<SVGElement>;
}

const SvgIcon = ({ svg }: SvgIconProps) => {
  const isActive = false;
  const nothing = ``;
  return (
    <a href="#" className={`item-link ${isActive ? `active` : nothing}`} id="pageLink">
      {svg}
    </a>
  );
};
export default SvgIcon;
