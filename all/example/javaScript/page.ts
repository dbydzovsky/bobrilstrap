import * as b from 'bobril';
import header from '../common/header';

export default b.createVirtualComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts)
        ];
    }
})

const texts = {
    header: 'JavaScript',
    headerContent: `Bring Bootstrap's components to life with over a dozen custom jQuery plugins.
     Easily include them all, or one by one.`
};