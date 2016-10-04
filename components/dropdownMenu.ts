import * as b from 'bobril';
import { ul, IUlData } from './ul';
import { IElementBobrilNode } from './element';

export const dropdownMenuStyles = {
    dropdownMenu: b.styleDef('dropdown-menu'),
    dropdownMenuRight: b.styleDef('dropdown-menu-right')
};

export interface IDropDownMenuData extends IUlData {
    right?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IDropDownMenuData;
}

export const dropdownMenu = b.createDerivedComponent<IDropDownMenuData>(ul, {
    id: 'bobrilstrap-dropdown-menu',
    render(ctx: ICtx, me: IElementBobrilNode) {
        b.style(me, dropdownMenuStyles.dropdownMenu);
        b.style(me, !!ctx.data.right && dropdownMenuStyles.dropdownMenuRight);
        me.attrs['role'] = 'menu';
    }
});

export default dropdownMenu;