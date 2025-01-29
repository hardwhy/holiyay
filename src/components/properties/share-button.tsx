"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { LuShare2 } from "react-icons/lu";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Property } from "@prisma/client";

type Props = {
  data: Property;
};
function ShareButton({ data: { id, name, ...data } }: Props) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareUrl = url + "/properties/" + id;
  const iconProps = { size: 32, borderRadius: 8 };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <TwitterShareButton url={shareUrl} name={name}>
          <TwitterIcon {...iconProps} />
        </TwitterShareButton>
        <FacebookShareButton url={shareUrl} name={name}>
          <FacebookIcon {...iconProps} />
        </FacebookShareButton>
        <PinterestShareButton url={shareUrl} name={name} media={data.image}>
          <PinterestIcon {...iconProps} />
        </PinterestShareButton>
        <EmailShareButton url={shareUrl} name={name}>
          <EmailIcon {...iconProps} />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
