'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button';
import Logo from '../Logo';
import BookmarkIcon from '../icons/Bookmark';
import LoginIcon from '../icons/Login';
import SearchIcon from '../icons/Search';
import FaveBar from './FaveBar';
import SearchBar from './SearchBar';
import './styles.scss';

type SidebarProps = { login?: boolean }
const Sidebar = ({ login }: SidebarProps) => {
    const [activeTab, setActiveTab] = useState<'search' | 'fave'>('fave');

    return <div className='sidebar'>
        <div className='sidebar-control'>
            <div className='content'>
                <div className='logo'>
                    <Logo />
                </div>

                <Button className='blue' icon={<SearchIcon />} active={activeTab === 'search'}
                    onClick={() => {
                        setActiveTab('search');
                    }}
                />

                <Button className='red' icon={<BookmarkIcon />} active={activeTab === 'fave'}
                    onClick={() => {
                        setActiveTab('fave');
                    }}
                />

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

        {activeTab && <div className='sidebar-activeTab'>
            <div className='content'>
                {activeTab === 'search' && <SearchBar />}
                {activeTab === 'fave' && <FaveBar />}
            </div>
        </div>}
    </div>
}

export default Sidebar;