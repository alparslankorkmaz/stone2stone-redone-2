import Image from "next/image";
import Link from "next/link";
import logo from "public/img/logo/logo.svg";
import linkedin from "public/img/footer/linkedin.svg";
import { footerLinks } from "@/constant";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div>
    <h4 className="font-semibold text-white lg:text-3xl mb-4">{title}</h4>
    <ul className="flex flex-col text-footer-gray text-sm lg:text-base">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-between p-10 lg:p-20 bg-footer_bg bg-cover bg-no-repeat bg-center">
        {/* LOGO */}
        <div className="my-10 lg:my-0">
          <Link href="/">
            <Image src={logo} alt="stone2stone logo" width={250} height={44} />
          </Link>
        </div>
        <div className="flex gap-16 lg:gap-44 lg:mr-16">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
        </div>
        <div className="basis-full flex justify-between my-10 lg:my-0 items-center">
          <div className="text-footer-gray">Copyright @ Stone2stone 2023</div>
          <div className="">
            <Link href="/" target="_blank">
              <Image
                src={linkedin}
                width={38}
                height={38}
                alt="linkedin"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
