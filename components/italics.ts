import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let italics  = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-italics',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'em';
    }
});

export let em = italics;

export default italics;