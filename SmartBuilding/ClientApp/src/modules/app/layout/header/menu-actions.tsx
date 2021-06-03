import styled from '@emotion/styled';
import { ButtonIcon } from 'modules/app/shared/button/button-icon';
import { rem } from 'styles/utils/sizes';

const MenuActionsWrapper = styled.ul`
    align-items: center;
    display: flex;

    > li {
        &:not(:first-of-type) {
            margin-left: ${rem(24)};
        }
    }
`;

type IconAlertProps = {
    notificationNumber: number;
};

const IconAlert = styled.div<IconAlertProps>`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig }
            }
        },
        notificationNumber
    }) => `
        line-height: 0;
        position: relative;

        &:after {
            align-items: center;
            background-color: ${colors.secondary.danger};
            border: ${rem(3)} solid ${colors.primary.default};
            border-radius: 50%;
            color: ${colors.neutral.fullLight};
            content: '${notificationNumber}';
            display: block;
            display: flex;
            ${getTextsConfig('XS')};
            height: ${rem(16)};
            justify-content: center;
            position: absolute;
            right: ${rem(-8)};
            top: ${rem(-6)};
            width: ${rem(16)};
        }
   `}
`;

const MenuActions = ({ notificationNumber }: IconAlertProps) => {
    return (
        <MenuActionsWrapper>
            <li>
                <IconAlert notificationNumber={notificationNumber}>
                    <ButtonIcon
                        iconName='email'
                        btnName='Notifications'
                        disabled
                    />
                </IconAlert>
            </li>
            <li>
                <ButtonIcon iconName='gear' disabled btnName='Config' />
            </li>
            <li>
                <ButtonIcon iconName='user' disabled btnName='User' />
            </li>
        </MenuActionsWrapper>
    );
};

export { MenuActions, MenuActionsWrapper };
