import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

type Props = {};

const Social = (props: Props) => {
  return (
    <div className=" flex gap-4 text-xl">
      <Link href={"#"}>
        <FaFacebookF />
      </Link>
      <Link href={"#"}>
        <FaInstagram />
      </Link>
      <Link href={"#"}>
        <FaLinkedinIn />
      </Link>
      <Link href={"#"}>
        <FaYoutube />
      </Link>
    </div>
  );
};

export default Social;
