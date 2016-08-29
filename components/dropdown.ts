import * as b from 'bobril';
import { mergeToChildren } from './bobrilHelpers';
import { elem, IBaseData } from './element';
import { button, IButtonData } from './button';
import { buttonGroup, IButtonGroupData } from './buttonGroup';
import { inputGroupBtn, IInputGroupBtnData } from './inputGroupBtn';

export const dropdownStyles = {
    dropdown: b.styleDef('dropdown'),
    dropdownToggle: b.styleDef('dropdown-toggle'),
    dropup: b.styleDef('dropup')
};

export interface IDropdownData extends IBaseData {
    button: IButtonData;
    buttonGroup?: IButtonGroupData | boolean;
    inputGroupBtn?: IInputGroupBtnData | boolean;
    up?: boolean;
    splitted?: boolean;
    splittedSrOnlyText?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IDropdownData;
}

export const dropdown = b.createDerivedComponent<IDropdownData>(elem, {
    id: 'bobrilstrap-dropdown',
    render(ctx: ICtx, me: b.IBobrilNode) {
        addButton(ctx, me);

        if (ctx.data.buttonGroup || ctx.data.inputGroupBtn) {
            me.tag = undefined;
            let groupNode = ctx.data.buttonGroup 
                ? buttonGroup(typeof ctx.data.buttonGroup === 'boolean' ? {} : ctx.data.buttonGroup, me.children)
                : inputGroupBtn(typeof ctx.data.inputGroupBtn === 'boolean' ? {} : ctx.data.inputGroupBtn, me.children);
            b.style(groupNode, ctx.data.up && dropdownStyles.dropup);
            me.children = groupNode;
        } else {
            b.style(me, ctx.data.up ? dropdownStyles.dropup : dropdownStyles.dropdown);
        }
    }
});

export default dropdown;

function updateButtonDataForDropdown(originalButtonData: IButtonData): IButtonData {
    let buttonData = b.assign({}, originalButtonData);
    buttonData.dropdown = true;
    buttonData.aria = b.assign({}, buttonData.aria);
    buttonData.aria.hasPopup = true;
    return buttonData;
}

function addButton(ctx: ICtx, me: b.IBobrilNode) {
    let dropdownButton: b.IBobrilNode,
        caretButton: b.IBobrilNode;

    if (ctx.data.splitted) {
        caretButton = button(updateButtonDataForDropdown({
            option: ctx.data.button.option,
            size: ctx.data.button.size,
            dropdownSplittedSrOnly: ctx.data.splittedSrOnlyText
        }));
        dropdownButton = button(ctx.data.button);
    } else {
        dropdownButton = button(updateButtonDataForDropdown(ctx.data.button));
        b.style(dropdownButton, dropdownStyles.dropdownToggle);
    }

    mergeToChildren(me, caretButton, true);
    mergeToChildren(me, dropdownButton, true);
}