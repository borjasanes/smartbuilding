import styled from '@emotion/styled';
import { rem } from 'styles/utils/sizes';
import { Icon, IconWrapper } from '../icon/icon';

type ButtonIconProps = {
    type?: 'button' | 'submit' | 'reset';
    btnName?: string;
    iconName?: string;
    onClick?: () => void;
    disabled?: boolean;
};

const ButtonIconBase = styled.button`
    ${({
        theme: {
            base: { colors }
        }
    }) => `
        align-items: center;
        background-color: transparent;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        padding: ${rem(4)};

        &:hover:not(:disabled) {
            cursor: pointer;

            ${IconWrapper} {
                color: ${colors.secondary.light};
            }
        }

        &:active:not(:disabled) {
            ${IconWrapper} {
                color: ${colors.secondary.dark};
            }
        }

        &:disabled {
            cursor: default;
        }

        ${IconWrapper} {
            color: ${colors.neutral.fullLight};
        }
    `}
`;

const ButtonIcon = ({
    type = 'button',
    btnName,
    iconName,
    onClick,
    disabled
}: ButtonIconProps) => (
    <ButtonIconBase
        type={type}
        name={btnName}
        onClick={onClick}
        disabled={disabled}
    >
        {iconName && <Icon iconName={iconName} />}
    </ButtonIconBase>
);

export { ButtonIcon };
