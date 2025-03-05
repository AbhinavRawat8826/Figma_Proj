import React from 'react'
import { LuScanSearch } from "react-icons/lu";
import { PiCardsLight } from "react-icons/pi";
import { PiStarFour } from "react-icons/pi";
import { SlCursor } from "react-icons/sl";
import { PiEraserLight } from "react-icons/pi";
import { LuImageUpscale } from "react-icons/lu";
import { FcRemoveImage } from "react-icons/fc";

export const Dashboarditem=[
    {
        icon:<LuScanSearch className="size-[17px] leading-[24px] "  />,
        title:'Create'
      },
      {
        icon:<PiCardsLight className="size-[17px] leading-[24px] "  />,
        title:'My Products'
      },
      {
        icon:<PiStarFour className="size-[17px] leading-[24px] "  />,
        title:'Fashion Generator'
      },
      {
        icon:<SlCursor className="size-[17px] leading-[24px] "  />,
        title:'SEO Keywords'
      },
      {
        icon:<PiEraserLight className="size-[17px] leading-[24px] "  />,
        title:'Clean Up'
      },
      {
        icon:<LuImageUpscale className="size-[17px] leading-[24px] "  />,
        title:'Upscaler'
      },
      {
        icon:<FcRemoveImage className="size-[17px] leading-[24px] "  />,
        title:'Remove Background'
      },
]
