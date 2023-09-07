import { useState } from 'react';
import GithubIcon from '../assets/icons/github.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import InstagramIcon from '../assets/icons/insta.svg';
import DevToIcon from '../assets/icons/devto.png';
import { Tooltip } from 'react-tooltip';
import { sendMail } from '../api';

const Contact = () => {
  const [inputText, setInputText] = useState('');
  const [isSent, setSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const socialList = [
    {
      name: 'Github',
      label: 'github-icon',
      link: 'https://github.com/briankarlsayen',
      img: GithubIcon,
    },
    {
      name: 'Linkedin',
      label: 'linkedin-icon',
      link: 'https://linkedin.com/in/briankarlsayen',
      img: LinkedinIcon,
    },
    {
      name: 'Instagram',
      label: 'instagram-icon',
      link: 'https://www.instagram.com/briansayen/',
      img: InstagramIcon,
    },
    {
      name: 'Devto',
      label: 'devto-icon',
      link: 'https://dev.to/blu3fire89',
      img: DevToIcon,
    },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await sendMail(inputText);
      setSent(true);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  return (
    <section id='contact' className='bg-tertiary'>
      <div className='min-h-screen max-w-2xl flex flex-col mx-auto justify-center text-white x-spacing md:px-0'>
        <h4 className='heading tracking-widest text-violet-primary'>Contact</h4>
        <h2 className='title pb-6 hero-title sub-heading'>Get in touch</h2>

        {!isSent ? (
          <div>
            <p>If you want to connect with me, leave your email here</p>
            <p>and I will contact you ASAP.</p>
            <form className='flex gap-2 pt-6' onSubmit={handleSubmit}>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-black-custom outline-none'
                type='email'
                placeholder='email'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                required
              />
              <button className='py-2 px-4 text-center bg-quaternary rounded flex gap-2'>
                Send
                {isLoading && <LoadingSpinner />}
              </button>
            </form>
          </div>
        ) : (
          <div className='pb-6'>
            Message Sent. I will contact your email as quickly as possible. Have
            a good day.
          </div>
        )}

        <div className='flex gap-4 pt-4'>
          {socialList.map((soc) => (
            <span key={soc.name}>
              <a href={soc.link} target='_blank'>
                <img
                  className='cursor-pointer icon-white h-[24px]'
                  src={soc.img}
                  alt={soc.label}
                  data-tooltip-id={soc.name}
                  data-tooltip-content={soc.name}
                />
                <Tooltip
                  style={{ background: '#7289DA', color: 'white' }}
                  noArrow
                  place='bottom'
                  id={soc.name}
                />
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div
        style={{ borderTopColor: 'transparent' }}
        className='w-5 h-5 border-4 border-blue-200 rounded-full animate-spin'
      ></div>
    </div>
  );
};

export default Contact;
