import SearchIcon from '../icons/Search';
import './styles.scss';

interface SearchInputProps {
    placeholder?: string
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
    return <div className='search-input'>
        <SearchIcon className='icon' />
        <input className='input' placeholder={placeholder}></input>
    </div>
}

export default SearchInput;