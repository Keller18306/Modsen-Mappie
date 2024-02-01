import Badge, { BadgeKey } from '@/ui/Badge';
import SearchIcon from '@/ui/icons/Search';
import Input from '../../Input';
import './styles.scss';
import Button from '@/ui/Button';

type SearchItem = [BadgeKey, string]

const searchItems: Array<SearchItem> = [
    ['nature', 'Природа'],
    ['culture', 'Культура'],
    ['history', 'История'],
    ['religion-1', 'Религия'],
    ['architecture-1', 'Архитектура'],
    ['industrial-1', 'Индустриальные объекты'],
    ['other', 'Разное'],
    ['entertainment-1', 'Развлечения'],
    ['sport-1', 'Спорт'],
    ['18+', 'Для взрослых'],
    ['car-1', 'Авто'],
    ['gas', 'Заправки'],
    ['bike-1', 'Велосипеды'],
    ['shop-1', 'Магазины'],
    ['food', 'Еда'],
    ['coffee', 'Кофе/чай'],
    ['bank', 'Банки'],
    ['hotel-1', 'Место для сна']
];

const SearchBar = () => {
    return <div className='searchbar'>
        <Input icon={<SearchIcon className='icon' />} placeholder='Место, адрес...' />

        <div className='header-search'>
            Искать:
        </div>

        <div className='search-list'>
            <div className='items'>
                {searchItems.map(([badge, title]: SearchItem, i) => {
                    return <div key={`${badge}-${i}`} className='item'>
                        <Badge badge={badge} outlined={true} />
                        <div className='text'>{title}</div>
                    </div>
                })}
            </div>
        </div>

        <div className='radius-header'>
            В радиусе
        </div>

        <div className='radius-field'>
            <Input className='radius-input' defaultValue={45} />
            <span className='metric'>км</span>
        </div>

        <div className='spacer'/>

        <Button className='button-search blue' icon={<SearchIcon />} />
    </div>
}

export default SearchBar;