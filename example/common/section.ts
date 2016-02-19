import * as b from 'bobril';
import { element, p, h1 } from '../../index';
import { styles } from '../bsexample/css';

export interface IData {
    header: string;
    lead?: b.IBobrilChildren;
    id: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createVirtualComponent<IData>({
    id: 'bs-docs-section',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        b.style(me, styles.bsDocsSection);
        me.children = [
            h1({ attrs: { id: ctx.data.id }, styles: styles.pageHeader }, ctx.data.header),
            !!ctx.data.lead && p({ lead: true }, ctx.data.lead),
            ctx.data.children
        ];
    }
});