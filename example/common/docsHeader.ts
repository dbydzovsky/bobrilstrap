import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';

interface IData {
    header: string;
    headerContent: string;
    iconText?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export const header = b.createVirtualComponent<IData>({
    id: 'example-header',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = ctx.data.iconText ? 'main' : 'div';
        b.style(me, !!ctx.data.iconText && styles.bsDocsMastHead);
        b.style(me, !ctx.data.iconText && styles.bsDocsHeader);
        me.attrs = { id: 'content', tabindex: -1 };
        me.children = bs.container({}, [
            ctx.data.iconText && bs.span(
                { style: [styles.bsDocsBooticon, styles.bsDocsBooticonLg, styles.bsDocsBooticonOutline] },
                ctx.data.iconText
            ),
            bs.h1({}, ctx.data.header),
            bs.p({ lead: !!ctx.data.iconText }, ctx.data.headerContent)
        ]);
    }
});