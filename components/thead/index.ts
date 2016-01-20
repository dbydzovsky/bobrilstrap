import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';
import Context, { contextStyles } from 'bobrilstrap-context';

interface ICtx extends b.IBobrilCtx {
    data: IBaseData;
}

export let create = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-thead',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'thead';
    }
});

export default create;
