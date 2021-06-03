import styled from '@emotion/styled';
import { ReactComponent as LogoImage } from 'assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { rem } from 'styles/utils/sizes';
import { routesConfig } from '../../routes/routes-config';
import { Container } from '../main/container';
import { MenuActions, MenuActionsWrapper } from './menu-actions';
import { Navbar, NavItem, NavWrapper } from './navbar';

const HeaderWrapper = styled.header`
    ${({
        theme: {
            base: { colors, layout }
        }
    }) => `
        background-color: ${colors.primary.default};
        color: ${colors.neutral.fullLight};
        flex: 0 0 auto;
        height: ${rem(72)};
        padding: 0 ${rem(layout.padding)};

        ${NavWrapper} {
            margin-left: ${rem(152)};
        }

        ${MenuActionsWrapper} {
            margin-left: auto;
        }
   `}
`;

const HeaderContainer = styled(Container)`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-start;
`;

const menuOptions: NavItem[] = [
    {
        label: 'Home',
        to: routesConfig.home.route
    },
    {
        label: 'Operations',
        to: routesConfig.operations.route
    },
    {
        label: 'Management'
    },
    {
        label: 'Reporting'
    }
];

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <NavLink to='/' title='Go to homepage'>
                    <LogoImage />
                </NavLink>
                <Navbar options={menuOptions} />
                <MenuActions notificationNumber={12} />
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export { Header };
