import { getProfileImage } from "@/utils/actions/profile-actions";
import Image from "next/image";
// import Image from "next/image";
import React from "react";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await getProfileImage();
  
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Profile Image"
        width={6}
        height={6}
        className="w-6 h-6 rounded-full"
      />
    );
  }
  return (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white">
      UserIcon
    </LuUser2>
  );
}

export default UserIcon;
