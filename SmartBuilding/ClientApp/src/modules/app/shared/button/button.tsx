import styled from '@emotion/styled';
import { rem } from 'styles/utils/sizes';
import { Icon, IconWrapper } from '../icon/icon';

type ButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    iconName?: string;
    onClick?: () => void;
};

const ButtonBase = styled.button`
    ${({
        theme: {
            base: {
                colors,
                fonts: { getTextsConfig, boldFont }
            }
        }
    }) => `
        align-items: center;
        background-color: ${colors.neutral.fullLight};
        border-radius: ${rem(8)};
        border: 2px solid ${colors.primary.default};
        box-sizing: border-box;
        color: ${colors.primary.default};
        display: inline-flex;
        ${getTextsConfig('M')};
        font-family: ${boldFont};
        height: ${rem(40)};
        justify-content: center;
        padding: ${rem(8)} ${rem(24)};

        &:hover {
            background-color: ${colors.primary.default};
            color: ${colors.neutral.fullLight};
            cursor: pointer;
        }

        &:active {
            background-color: ${colors.secondary.dark};
            border-color: ${colors.secondary.dark};
            color: ${colors.neutral.fullLight};
        }

        ${IconWrapper} {
            margin-right: ${rem(8)};
        }
    `}
`;

const Button = ({ label, type = 'button', iconName, onClick }: ButtonProps) => (
    <ButtonBase type={type} onClick={onClick}>
        {iconName && <Icon iconName={iconName} />}
        {label}
    </ButtonBase>
);

export { Button };
