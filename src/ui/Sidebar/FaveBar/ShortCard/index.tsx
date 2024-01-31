import Badge, { BadgeKey } from '@/ui/Badge';
import IconArrowLeftRound from '@/ui/icons/ArrowLeftRound';
import BookmarkIcon from '@/ui/icons/Bookmark';
import './styles.scss';

interface ShortCardProps {
    title: string;
    badges: BadgeKey[];
    description: string;
}
const ShortCard = ({ title, badges, description }: ShortCardProps) => {
    return <div className='shortCard'>
        <div className='card-header'>
            <div className='image'>
                <div className='badge-list'>
                    {badges.map((badge: BadgeKey, i) => {
                        return <Badge key={`${badge}-${i}`} badge={badge} outlined={true} />
                    })}
                </div>
            </div>
            <div className='title'>
                {title}
            </div>
        </div>
        <div className='card-description'>
            {description}
        </div>
        <div className='card-links'>
            <BookmarkIcon className='bookmark' />
            <IconArrowLeftRound className='arrow-left' />
        </div>
    </div>
}

export default ShortCard;