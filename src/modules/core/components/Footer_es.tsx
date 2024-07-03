import { Text, Container, ActionIcon, Group, rem, Image, SimpleGrid, Flex, Button } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './footerLinks.module.css';
import imagen1 from '../../../assets/images/TAXICARIBE_TRANSPARENTE.png';

const data = [
    {
        title: 'About',
        links: [
            { label: 'Features', link: '#' },
            { label: 'Pricing', link: '#' },
            { label: 'Contact', link: '#' },
            { label: 'About', link: '#' },
        ],
    },
    
    {
        title: 'Social Networks',
        links: [
            { label: 'Instagram', link: '#' },
            { label: 'Follow on Twitter', link: '#' },
            { label: 'Email Contact', link: '#' },

        ],
    },
];

function FooterLinks() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
                mx="lg"
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title} mx="lg">{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <SimpleGrid cols={1}>
                        <Image
                            src={imagen1}
                            w="17%"

                            h="100%"
                            className={classes.logoZoom}
                        />
                        <Text size="xs" c="dimmed" >
                            Nos encargamos de tus traslados en la ciudad de Bradenton, Sarasota, Palmetto, Ellenton y sus alrededores.
                        </Text>
                    </SimpleGrid>
                    <div className={classes.groups}>
                        {groups}
                    </div>
            </Flex>
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Text c="dimmed" size="sm">
                    © 2024 TaxiCaribe.com. Todos los derechos reservados
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Flex>
            
            <Container >
            </Container>
            
        </footer>
    );
}

export default FooterLinks;