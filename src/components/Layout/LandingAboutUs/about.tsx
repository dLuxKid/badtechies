import * as React from 'react'
import Button from '../../Button/button'
import { OceanOrnament } from '@/assets/svg'
import { Container } from '../Container'

// parts
import Frame from './frame'
import clsx from 'clsx'

const MainContent = (
  <div className="flex lg:gap-16 gap-4 max-lg:flex-col">
    <p className="_header text-ibtc-black">
      A community of tech enthusiasts based in the heart of Ibadan, Nigeria.
    </p>
    <div className="lg:gap-[2.3rem] gap-7 flex flex-col text-[#4F4F4F]">
      <p>
        We are a diverse group of professionals, students, entrepreneurs, and
        hobbyists who share a common passion for all things tech.
      </p>

      <p>
        <b className="opacity-80 text-[#2f3549]">
          Our mission is to be the platform that truly supports Africa's talents
          to co-learn, share knowledge, research and collaborate on projects
          that have the potential to make a significant impact in our community
          and beyond.
        </b>
        We believe that technology has the power to solve some of the world's
        most pressing challenges, and we are committed to leveraging our skills
        and expertise to create positive change.
      </p>
      <span className="lg:w-fit">
        <Button
          href="https://forms.gle/YUFNtMk1b1i6iUcg9"
          style={{
            background: 'bg-ibtc-blue',
            color: 'text-white',
            hoverBg: 'hover:bg-ibtc-blue-darker',
            hoverColor: 'hover:text-ibtc-grey',
          }}
        >
          Join Now
        </Button>
      </span>
    </div>
  </div>
)

const AboutUs = () => {
  return (
    <div
      className={clsx({
        // desktop
        [' relative flex flex-col min-h-[43rem] overflow-hidden']: true,
        // mobile
        ['gap-10']: true,
      })}
      id="about-us"
    >
      <Container>
        <div className="flex flex-col gap-5">
          <span className="w-fit">
            <Button
              label
              style={{
                color: 'text-ibtc-blue',
                background: 'bg-ibtc-blue-light',
              }}
            >
              ABOUT US
            </Button>
          </span>
          {MainContent}
        </div>
      </Container>
      <OceanOrnament className="text-2xl absolute left-0 bottom-0 mt-10 hidden lg:block _stroke-grey" />
      <Frame />
    </div>
  )
}

export default AboutUs
