import Image from 'next/image';
import Button from '../Button';
import Logo from '../Logo';
import BookmarkIcon from '../icons/Bookmark';
import LoginIcon from '../icons/Login';
import SearchIcon from '../icons/Search';
import './styles.scss';

type SidebarProps = { login?: boolean }
const Sidebar = ({ login }: SidebarProps) => {
    return <div className='sidebar'>
        <div className='content'>
            <div className='logo'>
                <Logo />
            </div>

            <Button className='blue' icon={<SearchIcon />} active={true} />
            <Button className='red' icon={<BookmarkIcon />} active={false} />

            <div className="spacer" />

            {login ? (
                <div className='avatar'>
                    <Image className='avatar' src="/natura.png" width={512} height={512} alt='User avatar' />
                </div>
            ) : (
                <Button className='login gray' icon={<LoginIcon />} />
            )}
        </div>
    </div>
}

export default Sidebar;