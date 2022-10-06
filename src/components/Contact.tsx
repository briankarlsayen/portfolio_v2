import { useState } from 'react'
import GithubIcon from '../assets/icons/github.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import InstagramIcon from '../assets/icons/insta.svg';

const Contact = () => {
  const [ inputText, setInputText ] = useState("") 
  return (
    <section id='contact' className='bg-tertiary'>
      <div className="min-h-screen max-w-2xl flex flex-col mx-auto justify-center text-white x-spacing md:px-0">
        <h4 className="uppercase text-sm tracking-widest text-violet-primary">Contact</h4> 
        <h2 className="title pb-6 hero-title">Get in touch</h2>
        <p>If you want to connect with me, leave your email here</p>
        <p>and I will contact you ASAP.</p>
        <form className="flex gap-2 pt-6">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black-custom outline-none" type='email' placeholder='email'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} />
          <button className='py-2 px-6 text-center bg-quaternary rounded'>Send</button>
        </form>
        <div className='flex gap-4 pt-4'>
          <span>
            <a href='https://github.com/briankarlsayen' target="_blank">
              <img className='cursor-pointer icon-white' src={GithubIcon} alt="github-icon" />
            </a>
          </span>
          <span>
            <a href='https://linkedin.com/in/briankarlsayen' target="_blank">
              <img className='cursor-pointer icon-white' src={LinkedinIcon} alt="linkedin-icon" />
            </a>
          </span>
          <span>
            <a href='https://www.instagram.com/briansayen/' target="_blank">
              <img className='cursor-pointer icon-white' src={InstagramIcon} alt="instagram-icon" />
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact