import { FadeUpCard, FadeUpDiv, FadeUpStagger } from '@/components/animation';
import { CardIcon } from '@/components/link-card-icon';
import { CardName } from '@/components/link-card-name';
import { LinkCard } from '@/components/link-card';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import {
    FaDiscord,
    FaGithub,
    FaLocationArrow,
    FaTwitter,
    FaUserGraduate,
    FaLinkedin,
    FaSquareEnvelope,
    FaInstagram
} from 'react-icons/fa6';
import Avatar from '../../public/icon/avatar.jpg';


export default function Hero() {
    return (
        <main>
            <FadeUpStagger>
                <div className='grid grid-cols-12 grid-rows-3 gap-5 lg:gap-6'>
                    <FadeUpDiv className='col-span-12 row-span-3 space-y-5 md:space-y-7 lg:col-span-4 lg:space-y-8'>
                        <Image
                            className='pointer-events-none w-[150px] rounded-full shadow-xl lg:w-[200px]'
                            src={Avatar}
                            alt="nonick's avatar"
                        />
                        <section>
                            <h1 className='text-3xl font-black lg:text-4xl'>Naufal Randika</h1>
                            <h2 className='text-lg text-muted-foreground lg:text-xl'>
                                Software Engineer
                            </h2>
                        </section>
                        <div className='grid gap-1'>
                            <div className='flex items-center gap-2 text-muted-foreground'>
                                <FaLocationArrow />
                                <p>Indonesia</p>
                            </div>
                            <div className='flex items-center gap-2 text-muted-foreground'>
                                <FaUserGraduate />
                                <p> Bachelor of Informatics</p>
                            </div>
                        </div>
                    </FadeUpDiv>
                    <LinkCard
                        className='col-span-12 grid gap-3 p-6 transition-colors hover:border-[#0077B5] md:col-span-6 lg:col-span-4'
                        href='https://www.linkedin.com/in/naufalrandika/'
                    >
                        <CardIcon className='bg-[#0077B5]'>
                            <FaLinkedin size={25} />
                        </CardIcon>
                        <CardName name='LinkedIn' id='Naufal Randika Parikesit' />
                    </LinkCard>
                    <LinkCard
                        className='col-span-6 grid gap-3 p-6 transition-colors hover:border-blue-500 md:col-span-3 lg:col-span-2'
                        href='https://x.com/_p4rikesit'
                    >
                        <CardIcon className='bg-blue-500'>
                            <FaTwitter size={25} />
                        </CardIcon>
                        <CardName name='Twitter' id='@_p4rikesit' />
                    </LinkCard>
                    <LinkCard
                        className='col-span-6 grid gap-3 p-6 transition-colors hover:border-[#7289DA] md:col-span-3 lg:col-span-2'
                        href='https://discord.gg/naufalrandika'
                    >
                        <CardIcon className='bg-[#7289DA]'>
                            <FaDiscord size={25} />
                        </CardIcon>
                        <CardName name='Discord' id='@naufalrandika'>
                        </CardName>
                    </LinkCard>
                    <LinkCard
                        className='col-span-6 grid gap-3 p-6 transition-colors hover:border-blue-500 md:col-span-3 lg:col-span-2'
                        href='https://github.com/naufalrandika'
                    >
                        <div className='grid gap-3'>
                            <CardIcon className='bg-[#333]'>
                                <FaGithub size={25} />
                            </CardIcon>
                            <CardName name='GitHub' id='@naufalrandika' />
                        </div>
                        {/* <div className='grid grid-cols-4 gap-3'>
                            <Image width={32} height={32} src='/programLangs/JavaScript.svg' alt='javascript' />
                            <Image width={32} height={32} src='/programLangs/TypeScript.svg' alt='typescript' />
                            <Image width={32} height={32} src='/programLangs/PHP.svg' alt='php' />
                            <Image width={32} height={32} src='/programLangs/Python.svg' alt='python' />
                        </div> */}
                    </LinkCard>
                    <LinkCard
                        className='col-span-6 grid gap-3 p-6 transition-colors hover:border-[#E4405F] md:col-span-3 lg:col-span-2'
                        href='https://www.instagram.com/nrandika_p/'
                    >
                        <CardIcon className='bg-[#E4405F]'>
                            <FaInstagram size={25} />
                        </CardIcon>
                        <CardName name='Instagram' id='@nrandika_p'>
                        </CardName>
                    </LinkCard>
                    <FadeUpCard className='col-span-12 grid gap-3 p-6 transition-colors hover:border-red-500 dark:hover:border-red-500 md:col-span-6 lg:col-span-4'>
                        <CardIcon className='bg-red-500'>
                            <FaSquareEnvelope size={25} />
                        </CardIcon>
                        <CardName name='Email' id='naufalrandika44@gmail.com' />
                    </FadeUpCard>
                    <FadeUpCard className='col-span-12 grid gap-3 p-6 transition-colors hover:border-red-500 dark:hover:border-red-500 md:col-span-12 lg:col-span-8'>
                        <a className='text-center text-L'>Experience In Tech</a>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                            <div className='flex items-center gap-3 text-muted-foreground'>
                                <Image width={32} height={32} src='/companyLogo/ppi.png' alt='javascript' />
                                <p>PT PPI</p>
                                <p> | </p>
                                <p>Software Developer Intern</p>
                            </div>
                            <div className='flex items-center gap-3 text-muted-foreground'>
                                <Image width={32} height={32} src='/companyLogo/wpi.png' alt='javascript' />
                                <p>Warung Pangan Indonesia</p>
                                <p> | </p>
                                <p>Backend Engineer</p>
                            </div>
                            <div className='flex items-center gap-3 text-muted-foreground'>
                                <Image width={32} height={32} src='/companyLogo/bangkit.png' alt='javascript' />
                                <p>Bangkit</p>
                                <p> | </p>
                                <p>Cloud Computing Cohort</p>
                            </div>
                        </div>

                    </FadeUpCard>
                </div>
            </FadeUpStagger>
        </main>
    )
}