import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { panelStyles } from './panel';

export interface IPanelGroupData extends IBaseData {

}

interface IPanelGroupCtx extends b.IBobrilCtx {
    data: IPanelGroupData;
}

export const panelGroup = b.createDerivedComponent<IPanelGroupData>(elem, {
    id: 'bobrilstrap-panel-group',
    render(_ctx: IPanelGroupCtx, me: b.IBobrilNode) {
        b.style(me, panelStyles.panelGroup);
    }
});

export default panelGroup;