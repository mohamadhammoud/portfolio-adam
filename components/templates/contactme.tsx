import Link from 'next/link'
import React from 'react'
import DiscordIcon from '../atoms/icons/discord-icon'
import GithubIcon from '../atoms/icons/github-icon'
import GmailIcon from '../atoms/icons/gmail-icon'
import LocationIcon from '../atoms/icons/location-icon'
import TelegramIcon from '../atoms/icons/telegram-icon'
import TwitterIcon from '../atoms/icons/twitter-filled-icon'
import NativeButton from '../atoms/nativebutton'
import Header from '../molecules/header'

function ContactMe() {
  return (
    <div className="m-10" id="contactme">
      <Header
        title="Contact Me"
        text="If you have any questions or want to hire me, please contract me:"
      />

      <div className="text-center mt-10">
        <NativeButton>Get in touch!</NativeButton>
      </div>

      <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 text-center mt-10 px-5 text-xs">
        <div className="">
          <Link
            href="https://twitter.com/AdamBoudj"
            className="card w-full"
            style={{ textAlign: 'center' }}
          >
            <TwitterIcon />{' '}
            <span className="ml-5 text-gray-100"> @AdamBoudj </span>
          </Link>
        </div>

        <div className="">
          <div className="card w-full" style={{ textAlign: 'center' }}>
            <DiscordIcon />{' '}
            <span className="ml-5 text-gray-100"> Adam12365 </span>
          </div>
        </div>

        <div className="sm:col-span-1 w-full">
          <Link
            className="card w-full"
            style={{ textAlign: 'center' }}
            href="https://t.me/adamboudj"
          >
            <TelegramIcon />{' '}
            <span className="ml-5 text-gray-100"> @adamboudj </span>
          </Link>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 text-center mt-10 px-5 text-xs">
        <div className="">
          <Link
            href="https://github.com/aboudjem"
            className="card w-full"
            style={{ textAlign: 'start' }}
          >
            <GithubIcon />{' '}
            <span className="ml-5 text-gray-100"> aboudjem </span>
          </Link>
        </div>

        <div className="">
          <Link
            href="mailto:boudjemaa.adam@gmail.com"
            className="card w-full"
            style={{ textAlign: 'center' }}
          >
            <GmailIcon />{' '}
            <span className="ml-5 text-gray-100 ">
              {' '}
              boudjemaa.adam@gmail.com{' '}
            </span>
          </Link>
        </div>

        <div className=" sm:col-span-1 w-full">
          <div className="card" style={{ textAlign: 'center' }}>
            <LocationIcon /> <span className="ml-5 text-gray-100"> Dubai </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
