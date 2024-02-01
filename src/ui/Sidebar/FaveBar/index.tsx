import SearchIcon from '@/ui/icons/Search';
import Input from '../../Input';
import ShortCard from './ShortCard';
import './styles.scss';

const description = `
Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden.
Epigen digon fast svennefiera håven postfaktisk.
Atomslöjd defåling nigovena tegt i platt-tv.
Sextremism julgranssyndrom. Rit-avdrag fyr, jukanat don.
Apfälla menskopp eftersom spetät senessa inklusive mepaktiga.
Bloggbävning makroligt spepp gönas. Sitskate epir tidsfönster.
Hjärtslagslag defånera. Neck röstsamtal möbelhund.
Hexaledes ryggsäcksmodellen hikikomori när stenomiheten täpos.
Du kan vara drabbad.
`;

const FaveBar = () => {
    return <div className='favebar'>
        <Input icon={<SearchIcon className='icon' />} placeholder='Место, адрес...' />

        <div className='header'>
            Избранное:
        </div>

        <div className='cards'>
            <ShortCard
                title='Фантаcмагарический музей им. П.М. Машерова'
                badges={['culture', 'history']}
                description={description}
            />

            <ShortCard
                title='Городской парк'
                badges={['culture', 'history']}
                description={description}
            />

            <ShortCard
                title='Фантаcмагарический музей им. П.М. Машерова'
                badges={['culture', 'history']}
                description={description}
            />

            <ShortCard
                title='Фантаcмагарический музей им. П.М. Машерова'
                badges={['culture', 'history']}
                description={description}
            />
        </div>
    </div>
}

export default FaveBar;