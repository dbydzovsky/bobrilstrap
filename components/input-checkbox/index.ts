import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    value: boolean;
    onChange?: (value: boolean) => void;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-input-checkbox',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'input';
        me.attrs['type'] = 'checkbox';
        me.attrs.value = !!ctx.data.value;
    }
});

export default create;


