import Text from '@/ui/Text';
import SearchInput from '../../SearchInput';
import './styles.scss';

const SearchBar = () => {
    return <div className='searchbar'>
        <SearchInput placeholder='Место, адрес...' />

        <div className='header'>
            Искать:
        </div>


    </div>
}

export default SearchBar;