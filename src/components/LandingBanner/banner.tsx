import { ArrowDecLeft, ArrowDecRight } from '@/assets/svg'
import * as React from 'react'
import { ButtonGroup } from './parts'
import clsx from 'clsx'

const Banner = () => {
  return (
    <div className="_xer23_1212 bg-ibtc-blue _body max-lg:py-16">
      <div className="_wrapper flex items-end">
        <ArrowDecRight className="relative basis-[fit-content] bottom-[1.2rem] flex-shrink-0 hidden lg:block" />
        <Main />
        <ArrowDecLeft className="relative basis-[fit-content] bottom-[1.2rem] flex-shrink-0 hidden lg:block" />
      </div>
    </div>
  )
}

function Main() {
  return (
    <div className="flex-shrink-1 font-medium self-center text-center flex flex-col gap-[3.685rem]">
      <div className="flex flex-col gap-6 text-lg leading-[1.125rem]">
        <p className="text-white">
          <span className="py-2.5 px-4 bg-ibtc-blue-dark max-lg:text-xs max-lg:leading-3 w-fit">
            Black Talents in Africa do not have an equal ground in tech
          </span>
        </p>
        <p className="_spexXtext max-lg:text-[40px] max-lg:leading-10 text-white">
          We believe Black Tech Talents should be amplified especially the works
          they are doing. Do You?
        </p>
        <p className="text-ibtc-offwhite max-lg:text-base max-lg:leading-[22.4px]">
          Since 2022, People who believe in giving Blacks an equal chance and
          ground in tech have joined us
        </p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default Banner
