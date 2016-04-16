import * as b from 'bobril';
import elem, { IBaseData } from './element';
import { mergeToChildren } from './bobrilHelpers';
import { createDictionary } from './bobrilHelpers';

export interface IAlertData extends IBaseData {
    context: AlertContext;
}

interface ICtx extends b.IBobrilCtx {
    data: IAlertData;
}

export enum AlertContext {
    Success,
    Warning,
    Danger,
    Info
}

export const alertStyles = {
    alert: b.styleDef('alert'),
    alertSuccess: b.styleDef('alert-success'),
    alertInfo: b.styleDef('alert-info'),
    alertDanger: b.styleDef('alert-danger'),
    alertWarning: b.styleDef('alert-warning')
};

export const alertContextStyles = createDictionary<AlertContext, b.IBobrilStyle>();
alertContextStyles(AlertContext.Success, alertStyles.alertSuccess);
alertContextStyles(AlertContext.Info, alertStyles.alertInfo);
alertContextStyles(AlertContext.Danger, alertStyles.alertDanger);
alertContextStyles(AlertContext.Warning, alertStyles.alertWarning);

export let alert = b.createDerivedComponent<IAlertData>(elem, {
    id: 'bobrilstrap-alert',
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, alertStyles.alert);
        b.style(me, alertContextStyles(ctx.data.context));
        me.attrs['role'] = 'alert';
    }
});

export default alert;