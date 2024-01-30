import IconArrowLeftRound from '@/ui/icons/ArrowLeftRound';
import BookmarkIcon from '@/ui/icons/Bookmark';
import SearchInput from '../../SearchInput';
import './styles.scss';

const FaveBar = () => {
    return <div className='favebar'>
        <SearchInput placeholder='Место, адрес...' />

        <div className='header'>
            Избранное:
        </div>

        <div className='card'>
            <div className='card-header'>
                <div className='image'>
                    <div className='badge-list'>
                        <div className='badge culture'></div>
                        <div className='badge history'></div>
                    </div>
                </div>
                <div className='title'>
                    Фантаcмагарический музей им. П.М. Машерова
                </div>
            </div>
            <div className='card-description'>
                Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden.
                Epigen digon fast svennefiera håven postfaktisk.
                Atomslöjd defåling nigovena tegt i platt-tv.
                Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don.
                Apfälla menskopp eftersom spetät senessa inklusive mepaktiga.
                Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster.
                Hjärtslagslag defånera. Neck röstsamtal möbelhund.
                Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos.
                Du kan vara drabbad.
            </div>
            <div className='card-links'>
                <BookmarkIcon className='bookmark' />
                <IconArrowLeftRound className='arrow-left' />
            </div>
        </div>
    </div>
}

export default FaveBar;