import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let dt = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-dt',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'dt';
    }
});

export default dt;