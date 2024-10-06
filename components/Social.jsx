import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/KirtiLohchab",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/kirtilohchab/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/LohchabKirti",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => {
        return (
          <Link key={i} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
