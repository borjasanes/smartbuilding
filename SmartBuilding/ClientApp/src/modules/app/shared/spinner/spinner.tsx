import styled from '@emotion/styled';
import { getRgbaStrFromHexColor } from 'styles/utils/color';
import { rem } from 'styles/utils/sizes';
import { ReactElement } from 'react';
import { ReactComponent as SpinnerImage } from 'assets/img/spinner.svg';

interface SpinnerProps {
    isFullPage?: boolean;
    isSmall?: boolean;
}

const SpinnerOverlay = styled.div<SpinnerProps>`
    ${({
        theme: {
            base: { colors, zindex }
        },
        isFullPage,
        isSmall
    }) => `
        align-items: center;
        background-color: ${getRgbaStrFromHexColor(
            colors.neutral.fullLight,
            0.8
        )};
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: ${isFullPage ? 'fixed' : 'absolute'};
        top: 0;
        width: 100%;
        z-index: ${zindex.spinner};

        svg {
          height: ${rem(isSmall ? 24 : 42)};
          width: ${rem(isSmall ? 24 : 42)};
        }
    `}
`;

const SpinnerWrapper = styled.div`
    animation: rotate 3s infinite;
    line-height: 0;
`;

const SpinnerItem = styled(SpinnerImage)`
      transform-origin: center;

      @keyframes rotate {
        0% {
          transform: rotate(0);
        }
        25% {
          transform: rotate(90deg);
        }
        50% {
          transform: rotate(180deg);
        }
        75% {
          transform: rotate(270deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
`;

const Spinner = ({ isFullPage, isSmall }: SpinnerProps): ReactElement => {
    return (
        <SpinnerOverlay isFullPage={isFullPage} isSmall={isSmall}>
            <SpinnerWrapper>
                <SpinnerItem />
            </SpinnerWrapper>
        </SpinnerOverlay>
    );
};

export { Spinner, SpinnerOverlay };
