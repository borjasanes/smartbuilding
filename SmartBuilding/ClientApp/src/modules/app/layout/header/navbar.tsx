import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { rem } from 'styles/utils/sizes';

export interface NavItem {
    label: string;
    to?: string;
}

type NavProps = {
    options: NavItem[];
};

const NavWrapper = styled.nav`
    ${({
        theme: {
            base: {
                colors,
                fonts: { boldFont }
            }
        }
    }) => `
        align-items: center;
        display: flex;
        height: 100%;

        a {
            transition: all 0.3s ease;

            &:after {
                bottom: 0;
                content: '';
                height: 0;
                left: 0;
                position: absolute;
                transition: all 0.3s ease;
                width: 100%;
            }

            &:hover,
            &.isActive {
                color: ${colors.secondary.light};

                &:after {
                    background-color: ${colors.secondary.light};
                    height: ${rem(3)};
                }
            }

            &.isActive {
                font-family: '${boldFont}';

                &:hover {
                    cursor: default;
                }
            }
        }

        .navitem {
            align-items: center;
            display: inline-flex;
            height: 100%;
            padding: 0 ${rem(4)};
            position: relative;
        }
   `}
`;

const NavList = styled.ul`
    align-items: center;
    display: flex;
    height: 100%;

    > li {
        height: 100%;

        &:not(:first-of-type) {
            margin-left: ${rem(44)};
        }
    }
`;

const NavItemLabel = styled.span`
    display: block;

    &:hover {
        cursor: default;
    }
`;

const Navbar = ({ options }: NavProps) => {
    return (
        <NavWrapper>
            <NavList>
                {options.map((item: NavItem, index) => (
                    <li key={index}>
                        {item.to ? (
                            <NavLink
                                to={item.to}
                                activeClassName='isActive'
                                className='navitem'
                            >
                                {item.label}
                            </NavLink>
                        ) : (
                            <NavItemLabel className='navitem'>
                                {item.label}
                            </NavItemLabel>
                        )}
                    </li>
                ))}
            </NavList>
        </NavWrapper>
    );
};

export { Navbar, NavWrapper };
