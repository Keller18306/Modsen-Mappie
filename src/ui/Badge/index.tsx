import clsx from "clsx";
import { availableBadges } from "./badges";
import './styles.scss';

export type BadgeKey = keyof typeof availableBadges;

interface BadgeProps {
    badge: BadgeKey,
    outlined?: boolean
}
const Badge = ({ badge, outlined }: BadgeProps) => {
    const item = availableBadges[badge];

    return <div className={clsx('badge', `${badge}`, {
        'badge-outlined': Boolean(outlined)
    })} style={{
        background: item.color
    }}>
        {item.svg}
    </div>
}

export default Badge;