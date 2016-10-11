import * as b from 'bobril';
import { header } from '../common/docsHeader';

export const javaScript = b.createVirtualComponent({
    id: 'bobrilstrap-javasctipt',
    init() {
        document.title = 'Bobrilstrap - Javascript';
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            header(texts)
        ];
    }
});

const texts = {
    header: 'JavaScript',
    headerContent: `Bring Bootstrap's components to life with over a dozen custom jQuery plugins.
     Easily include them all, or one by one.`
};