import Image from 'next/image';

type LogoProps = { className?: string }
const Logo = ({ className }: LogoProps) => {
    return <Image
        className={className}
        src='/mappie.svg'
        width={32}
        height={30}
        alt='Mappie logo'
    />;
}

export default Logo;