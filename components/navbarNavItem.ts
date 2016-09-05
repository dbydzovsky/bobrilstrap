import * as b from 'bobril';
import { tab, ITabData } from './tab';

export interface INavbarNavItem extends ITabData {
}

interface INavbarNavCtx extends b.IBobrilCtx {
    data: INavbarNavItem;
}

export const navbarNavItem = b.createDerivedComponent<INavbarNavItem>(tab, {
    id: 'bobrilstrap-navbar-nav-item'
});

export default navbarNavItem;