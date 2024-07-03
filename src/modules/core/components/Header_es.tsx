import { Container, Group, rem, UnstyledButton, Image, Text } from '@mantine/core';
import logo_portada from '../../../assets/images/TAXICARIBE_TRANSPARENTE.png';
import classes from './header.module.css';
import '@mantine/core/styles.css';
import { useHeadroom } from '@mantine/hooks';
import { Menu, Button } from '@mantine/core';
import Flag from 'react-world-flags'



import {
    IconLanguage,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';





const Header = () => {
    const pinned = useHeadroom({ fixedAt: 120 });
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    };



    return (
        <>
            <header>
                <Container size="lg" p="md" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: 'var(--mantine-spacing-xs)',
                    zIndex: 1,
                    transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                    transition: 'transform 400ms ease',
                    backgroundColor: 'var(--mantine-color-body)',
                    borderRadius: '60px',
                    marginTop: '1%',
                    boxShadow: '0px 3px 16px rgba(0, 0, 0.2, 0.2)',
                }}>
                    <Group justify='space-between'>
                        <Image
                            src={logo_portada}
                            w="9%"
                            ta="center"
                            mx="xl"
                            className={classes.logoZoom}
                        />
                        <Group gap={30} visibleFrom="xs" mx="xl">
                            <UnstyledButton className={classes.buttonh}>Inicio</UnstyledButton>
                            <UnstyledButton className={classes.buttonh}>Servicios</UnstyledButton>
                            <UnstyledButton className={classes.buttonh}>Pasos</UnstyledButton>
                            <UnstyledButton className={classes.buttonh}>Planes</UnstyledButton>
                            <UnstyledButton className={classes.buttonh}>Contacto</UnstyledButton>
                            <Menu trigger="click-hover" openDelay={100} closeDelay={400} transitionProps={{ transition: 'rotate-right', duration: 150 }}>
                                <Menu.Target>
                                    <Button variant="light" color="orange" autoContrast size="xs" radius="lg"> <Flag code="es" height="13" /> <Text>-</Text> Español</Button>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Label>Language / Idiomas</Menu.Label>
                                    <Menu.Item onClick={() => handleClick('/en')} >
                                        <Flag code="us" height="10" /> English
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Flag code="es" height="13" onClick={() => handleClick('/es')} /> Español
                                    </Menu.Item>
                                    <Menu.Item
                                    leftSection={<IconLanguage style={{ width: rem(14), height: rem(14) }} />}
                                    disabled
                                >
                                    More languages coming soon.
                                </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </Group>


                </Container>
            </header>

        </>

    );
}

export default Header;