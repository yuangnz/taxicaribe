
import { Overlay, Container, Title, Button, Text, Paper, Center } from '@mantine/core';
import { Avatar, Group, TypographyStylesProvider } from '@mantine/core';
import {
    MantineProvider,
    defaultVariantColorsResolver,
    VariantColorsResolver,
    parseThemeColor,
    rem,
    rgba,
    darken,
    useMantineTheme,
    TextInput,
    Textarea,
    ThemeIcon,
    Grid,
    Flex,
    Image,
    Divider,
    Transition,
    Accordion
} from '@mantine/core';
import { SimpleGrid, Badge, Card, BackgroundImage, Box, ActionIcon } from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';
import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { Timeline } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';
import { AspectRatio, Anchor } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

import footer from './footer.module.css';
import classes from './main1.module.css';
import classes2 from './main2.module.css';
import '@mantine/core/styles.css';
import { useEffect, useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import imagen1 from '../../../assets/images/Fondo1.png';
import imagen2 from '../../../assets/images/FondoMaps.png';
import imagen3 from '../../../assets/images/imageFondo3.jpg';
import imagen4 from '../../../assets/images/TAXICARIBE_TRANSPARENTE.png';
import imagen5 from '../../../assets/images/phonemaps.png';
import imagen7 from '../../../assets/images/uberX.webp';
import imagen8 from '../../../assets/images/uberXL.webp';
import image from '../../../assets/images/TAXICARIBE_TRANSPARENTE.png';
import acc from './accordion.module.css';

//Colores personalizados para botones personalizados

const mockdata = [
    {
        title: 'Llegamos hasta donde tu quieras 🗺️',
        description:
            'No importa si es en la ciudad o en el campo, nosotros te llevamos a donde tu quieras',
        icon: IconGauge,
    },
    {
        title: 'La seguridad es primero 🛡️',
        description:
            'Nuestros conductores estan altamente capacitados para llevarte a tu destino de forma segura y confiable',
        icon: IconUser,
    },
    {
        title: 'Tarifas justas y transparentes 💸',
        description:
            'Nuestras tarifas son justas y transparentes, no te cobraremos de mas por tu viaje',
        icon: IconCookie,
    },
];

const links = [
    { link: '#', label: 'Contact' },
    { link: '#', label: 'Privacy' },
    { link: '#', label: 'Blog' },
    { link: '#', label: 'Careers' },
];


const mockdata2 = {
    image:
        'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    title: 'Verudela Beach',
    country: 'Croatia',
    description:
        'on the Adriatic coastline by one of the most beautiful beaches in Pula.',
    badges: [
        { emoji: '☀️', label: 'Sunny weather' },
        { emoji: '🌊', label: 'Sea' },
        { emoji: '🤽', label: 'Water sports' },
    ],
};

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

//Feature section 2 funtions


function MainPage() {



    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin: '0px',
                threshold: 0.1, // Ajusta este valor según tus necesidades
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);



    const { image, title, description, country, badges } = mockdata2;
    const features2 = badges.map((badge) => (
        <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
            {badge.label}
        </Badge>
    ));
    const featuresList = [
        {
            icon: IconReceiptOff,
            title: 'Delivery services 🍺 🍔',
            description: 'Delivery de comida, licor y cigarrillos a cualquier hora del dia o la noche',
        },
        {
            icon: IconFileCode,
            title: 'Taximetro 🚕',
            description: 'Tarifa inicial de $3 + $2 por milla recorrida durante el trayecto',
        },
        {
            icon: IconCircleDotted,
            title: 'Carreras Nocturnas 🌃',
            description:
                'A partir de las 12AM, se aplica un cargo adicional de $5 a todos los servicios, con una tarifa mínima de $12.',
        },
        {
            icon: IconFlame,
            title: 'Flexibilidad de horarios 🕙',
            description:
                'Servicio las 24 horas del dia, los 7 dias de la semana. No importa la hora, nosotros te llevamos a tu destino.',
        },
    ];

    const items = featuresList.map((feature) => (
        <div key={feature.title} >
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'lime', to: 'green' }}
            >
                <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
            </ThemeIcon>
            <Text fz="lg" mt="sm" fw={500}>
                {feature.title}
            </Text>
            <Text c="dimmed" fz="sm">
                {feature.description}
            </Text>
        </div>
    ));
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={`${classes.card} ${classes.logoZoom}`} padding="xl" >
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.green[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    });

    const autoplay = useRef(Autoplay({ delay: 3000 }));
    const icon = <IconInfoCircle />;

    const items1 = links.map((link) => (
        <Anchor<'a'>
            c="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));



    return (
        <>

            <Carousel
                withIndicators
                height="100vh"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                loop
            >

                <Carousel.Slide >
                    <Paper bg="rgba(254, 192, 144, 0.08)" style={{ borderBottomLeftRadius: '200px', borderBottomRightRadius: '200px' }}>
                        <div className={classes.hero}>
                            <Center h="100dvh">
                                <Container className={classes.container} size="md" >
                                    <MantineProvider
                                        theme={{
                                            fontFamily: 'SF Pro, sans-serif',
                                            fontFamilyMonospace: 'Monaco, Courier, monospace',
                                            headings: { fontFamily: 'SF Pro, sans-serif' },
                                        }}
                                    >
                                    </MantineProvider>
                                    <Text color="#562601" size='xl' mb="lg">#Seguridad Fiabilidad Confianza</Text>
                                    <Title c="black" ta="center" order={1} size="60" >Nos encargamos 🥊 de tus necesidades ⚡ y conducimos para ti 🚖</Title>
                                    <Text mt="xl" c='#3D0500' pr="xl" pl="xl" ta="center">
                                        Elimina el estres de conducir, nosotros nos encargamos de llevarte a tu destino de forma segura y confiable. No importa si es de dia o de noche, nosotros te lo llevamos a tu destino.
                                    </Text>
                                    <Group>
                                        <Button size="xl" radius="lg" className={classes.control} color='#F29200' mb={20} justify="center" c="white" style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }} >
                                            Contactar
                                        </Button>
                                    </Group>
                                    <Text pr="xl" pl="xl" ta="center" c="dimmed">
                                        Aprieta el boton para mas informacion.
                                    </Text>

                                    <Group>
                                        <Image src={imagen4} className={classes.logoZoom} w="auto" h="100" mt="lg" />
                                    </Group>
                                </Container>
                            </Center>

                        </div>

                    </Paper>
                </Carousel.Slide>
                <Carousel.Slide >
                    <Paper >
                        <div className={classes.hero}>
                            <Center h="100dvh">
                                <Container className={classes.container} size="md" >
                                    <MantineProvider
                                        theme={{
                                            fontFamily: 'SF Pro, sans-serif',
                                            fontFamilyMonospace: 'Monaco, Courier, monospace',
                                            headings: { fontFamily: 'SF Pro, sans-serif' },
                                        }}
                                    >
                                    </MantineProvider>
                                    <Badge bg="#F29200" size="md" mb="lg">TAXI CARIBE</Badge>
                                    <Title c="black" ta="center" size="3rem" >Tu experiencia es nuestra prioridad.</Title>
                                    <Text mt="xl" c='black' pr="xl" pl="xl" ta="center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur unde possimus eum impedit exercitationem rem, similique praesentium deserunt illo ipsum sed
                                    </Text>
                                    <Group>
                                        <Button size="xl" radius="lg" className={classes.control} color='green' mb={20} justify="center" c="white" style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }} >
                                            Contactar
                                        </Button>
                                    </Group>
                                    <Text pr="xl" pl="xl" ta="center" c="dimmed">
                                        Nuestras opiniones de como debemos llevarlo
                                    </Text>
                                    <Group gap={50} visibleFrom="xs" justify='center'>

                                        <Paper withBorder radius="md" className={`${classes.comment} ${classes.logoZoom}`} w="40%" mt="xl" shadow="xl" bg="rgba(72, 192, 144, 0.08)">
                                            <Group>
                                                <Avatar
                                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                                                    alt="Jacob Warnhalter"
                                                    radius="xl"
                                                />
                                                <div>
                                                    <Text fz="sm" c='black'>Ruben Urdaneta</Text>
                                                    <Text fz="xs" c='black' >
                                                        Owner
                                                    </Text>
                                                </div>
                                            </Group>
                                            <TypographyStylesProvider className={classes.body} c="black">
                                                <div
                                                    className={classes.content}
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur unde possimus eum impedit exercitationem rem, similique praesentium deserunt illo ipsum sed iste qui culpa laboriosam veritatis incidunt? Repudiandae, consectetur!</p>',
                                                    }}
                                                />
                                            </TypographyStylesProvider>
                                        </Paper>
                                        <Paper withBorder radius="md" className={`${classes.comment} ${classes.logoZoom}`} w="40%" mt="xl" shadow="xl" bg="rgba(254, 192, 144, 0.15)">
                                            <Group>
                                                <Avatar
                                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                                                    alt="Jacob Warnhalter"
                                                    radius="xl"
                                                />
                                                <div>
                                                    <Text fz="sm" color='Black'>Ruben Urdaneta</Text>
                                                    <Text fz="xs" color='Black'>
                                                        Owner
                                                    </Text>
                                                </div>
                                            </Group>
                                            <TypographyStylesProvider className={classes.body} c="black">
                                                <div
                                                    className={classes.content}
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur unde possimus eum impedit exercitationem rem, similique praesentium deserunt illo ipsum sed iste qui culpa laboriosam veritatis incidunt? Repudiandae, consectetur!</p>',
                                                    }}
                                                />
                                            </TypographyStylesProvider>
                                        </Paper>

                                    </Group>
                                    <Group>
                                        <Image src={imagen4} className={classes.logoZoom} w="auto" h="100" mt="lg" />
                                    </Group>
                                </Container>
                            </Center>

                        </div>

                    </Paper>
                </Carousel.Slide>
                {/* ...other slides */}

                <Carousel.Slide>
                    <Paper bg="rgba(72, 192, 144, 0.08)" style={{ borderBottomLeftRadius: '200px', borderBottomRightRadius: '200px' }}>
                        <div className={classes.hero}>
                            <Center h="95dvh">

                                <Container className={classes.root}>

                                    <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>

                                        <Image src={imagen4} className={classes.mobileImage} />
                                        <div>
                                            <Text variant="gradient"
                                                gradient={{ from: 'orange', to: 'yellow', deg: 81 }} size="4rem"
                                                fw={700} pb="lg">Te ofrecemos seguridad</Text>
                                            <Text size="lg" color="black">
                                                No solo te llevamos a tu destino, te llevamos con seguridad y confianza.
                                                a donde tu desees, cuando tu lo desees y como tu lo desees.
                                            </Text>
                                            <Button size="xl" radius="lg" className={classes.control} color='#F29200' mb={20} justify="center" c="white" style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }} >
                                                Contactar
                                            </Button>
                                            <Text c="dimmed">Contactanos para mayor informacion.</Text>
                                        </div>
                                        <Image src={imagen4} className={`${classes.desktopimage} ${classes.logoZoom}`} />
                                    </SimpleGrid>

                                    <SimpleGrid cols={1} verticalSpacing="xl" pt={100}>

                                    </SimpleGrid>
                                </Container>
                            </Center>
                        </div>
                    </Paper>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Paper >
                        <div className={classes.hero}>
                            <Center h="100dvh">

                                <Container className={classes.root}>
                                    <Text color="#19391A" size='xl' mb="xl" ta="center">Direccion, Origen y Destino</Text>
                                    <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>


                                        <Blockquote color="green" radius="xl" iconSize={37} cite="– TAXI CARIBE 🚖" icon={icon} mt="xl">
                                            Venimos a ofrecerte un servicio de calidad, seguro y confiable. Inclusive si no sabes a donde ir, nosotros te llevamos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolor sit voluptatibus sint porro commodi accusamus.
                                        </Blockquote>
                                        <div>
                                            <Text variant="gradient"
                                                gradient={{ from: 'green', to: 'lime', deg: 90 }} size="4rem"
                                                ta="end"
                                                fw={700} pb="lg">Tu Decides.</Text>
                                            <Text size="lg" color="black" ta="end">
                                                Iremos hasta los cofines de la tierra (Es broma solo a nuestro rango actual mas abajito de la pagina)
                                            </Text>

                                            <Group justify="flex-end">
                                                <Button size="xl" radius="lg" className={classes.control} color='green' mb={20} justify="end" c="white" style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }} >
                                                    Contactar
                                                </Button>
                                            </Group>
                                            <Text c="dimmed" ta="end">Contactanos para mayor informacion.</Text>
                                        </div>
                                    </SimpleGrid>
                                    <Group justify="center" >
                                        <Image src={imagen4} h="12rem" w="auto" mt="70" className={`${classes.desktopimage} ${classes.logoZoom}`} />
                                    </Group>
                                    <SimpleGrid cols={1} verticalSpacing="xl" pt={100}>
                                    </SimpleGrid>
                                </Container>
                            </Center>
                        </div>
                    </Paper>
                </Carousel.Slide>




            </Carousel>
            <div>
                    <Box h="100dvh" >
                        <Container size="lg" py="xl" pt="10%">
                            <form onSubmit={form.onSubmit(() => { })}>
                                <Title
                                    order={2}
                                    size="h1"
                                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                                    fw={900}
                                    ta="center"
                                >
                                    Get in touch
                                </Title>

                                <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                                    <TextInput
                                        label="Name"
                                        placeholder="Your name"
                                        name="name"
                                        variant="filled"
                                        {...form.getInputProps('name')}
                                    />
                                    <TextInput
                                        label="Email"
                                        placeholder="Your email"
                                        name="email"
                                        variant="filled"
                                        {...form.getInputProps('email')}
                                    />
                                </SimpleGrid>

                                <TextInput
                                    label="Subject"
                                    placeholder="Subject"
                                    mt="md"
                                    name="subject"
                                    variant="filled"
                                    {...form.getInputProps('subject')}
                                />
                                <Textarea
                                    mt="md"
                                    label="Message"
                                    placeholder="Your message"
                                    maxRows={10}
                                    minRows={5}
                                    autosize
                                    name="message"
                                    variant="filled"
                                    {...form.getInputProps('message')}
                                />

                                <Group justify="center" mt="xl">
                                    <Button type="submit" size="md">
                                        Send message
                                    </Button>
                                </Group>
                            </form>
                        </Container>
                    </Box>
            </div>

            <div>
                <Paper bg="rgba(254, 192, 144, 0.08)" radius="150">
                    <Box h="100dvh" >
                        <Container size="lg" py="xl">
                            <Group justify="center" pt="xl">
                                <Badge variant="filled" size="lg" color='green'>
                                    Beneficios
                                </Badge>
                            </Group>

                            <Title order={2} className={classes.title} ta="center" mt="sm" c="#133014">
                                Contamos con los mejores beneficios para ti ✅
                            </Title>

                            <Text c="dimmed" className={classes.description} ta="center" mt="md" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo quaerat atque aliquam, asperiores minima impedit. Ullam recusandae saepe minima laboriosam voluptate itaque eligendi aliquam quaerat vitae. Ipsa, nulla commodi.
                            </Text>

                            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={30} >
                                {features}
                            </SimpleGrid>

                        </Container>
                        <Box mx="15%">
                            <Paper withBorder radius="lg" className={classes.logoZoom} shadow="xl">
                                <div className={classes2.wrapper1}>
                                    <Grid gutter={80}>
                                        <Grid.Col span={{ base: 12, md: 5 }}>
                                            <Title className={classes2.title1} order={2} c="#133014">
                                                Bradenton / Sarasota / Palmetto / Ellenton 🚖
                                            </Title>
                                            <Text c="dimmed">
                                                Nuestro servicio de taxi es accesible desde Bradenton, Sarasota, Palmetto y Ellenton. No importa donde te encuentres, 24/7 y los 365 dias del año. No importa la hora, si es de dia o de noche, nosotros te llevamos a tu destino.
                                            </Text>

                                            <Button
                                                variant="gradient"
                                                gradient={{ deg: 133, from: 'green', to: 'lime' }}
                                                size="lg"
                                                radius="md"
                                                mt="xl"
                                                className={classes.logoZoom}
                                            >
                                                Get started
                                            </Button>
                                        </Grid.Col>
                                        <Grid.Col span={{ base: 12, md: 7 }}>
                                            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                                                {items}
                                            </SimpleGrid>
                                        </Grid.Col>
                                    </Grid>
                                </div>
                            </Paper>
                        </Box>
                    </Box>
                </Paper>

            </div>
            <div>
                <Paper radius={150} h="100dvh">
                    <div className={classes.hero}>

                        <Container className={classes.root}>
                            <Group justify="center" pt="xl">
                                <Badge variant="filled" size="lg" color='orange'>
                                    Rango
                                </Badge>
                            </Group>

                            <Title order={2} className={classes.title} ta="center" my="xl" c="#2C1602">
                                Nosotros seriamos tu mejor eleccion
                            </Title>
                            <Text color="#562601" size='xl' mb="xl" ta="center">#Bradenton, Sarasota, Palmetto, Ellenton y sus alrededores</Text>
                            <SimpleGrid cols={2} spacing="4rem" verticalSpacing="xl" mb="xl">

                                <div>
                                    <Group mt="xl" >
                                        <Title c="black" size="3rem" >Porque?</Title>
                                        <Text size='lg'>
                                            Yellow Taxi Miami es el servicio de taxis de Miami. Lo tenemos asegurado desde el momento en que toma asiento en uno de nuestros taxis. Nuestros taxistas son los mejores en la industria y completamente revisados y examinados para garantizar su seguridad.
                                            Todos nuestros taxis amarillos en Miami estan afianzados y asegurados y tienen los permisos y licencias necesarias para operar en Miami, FL. Nuestra principal preocupación es la seguridad de cada cliente y hacemos todo lo posible para garantizar esto constantemente.

                                        </Text>
                                        <Text fw={700}>Su seguridad mientras está en nuestros taxis es nuestra principal preocupación.</Text>
                                    </Group>
                                </div>
                                <div>

                                    <Paper>
                                        <Box w="720px" h="480px">
                                            <AspectRatio ratio={16 / 11} className={classes.logoZoom}>
                                                <iframe
                                                    width="100%" height="100%"
                                                    src="https://www.google.com/maps/embed/v1/place?q=Sarasota&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                                    title="Google map"
                                                    style={{ border: 0 }}
                                                />
                                            </AspectRatio>
                                        </Box>
                                    </Paper>
                                </div>
                            </SimpleGrid>
                            <SimpleGrid cols={1} verticalSpacing="xl" pt="xl">
                                <Text ta="center" c="dimmed">
                                    Nuestros rangos de servicio son amplios, no importa donde te encuentres, nosotros te llevamos a tu destino. Algunos de ellos son como los siguientes:
                                </Text>
                            </SimpleGrid>
                        </Container>
                    </div>
                </Paper>
            </div>



            <div>
                <Paper radius={150} bg="rgba(72, 192, 144, 0.08)">
                    <div className={classes.hero}>
                        <Center h="100dvh">
                            <Container className={classes.root}>
                                <Text color="#562601" size='xl' ta="center">#Sencillo</Text>
                                <SimpleGrid cols={2} spacing="10rem" verticalSpacing="xl">
                                    <Image src={imagen4} className={classes.mobileImage} />
                                    <div>
                                        <Group justify="flex-end" mt="xl" >
                                            <Badge variant="light" color="orange" size="xl" >
                                                Proceso de Ordenamiento
                                            </Badge>
                                        </Group>
                                        <Timeline active={1} bulletSize={31} align="left" lineWidth={4} color='orange' mt="xl"  >
                                            <Timeline.Item bullet={<IconGitBranch size={12} />} title="Ordena" className={classes.logoZoom}>
                                                <Text c="dimmed" size="sm">Decide hacia donde quieres ir </Text>
                                                <Text size="xs" mt={4}>Paso 1</Text>
                                            </Timeline.Item>
                                            <Timeline.Item bullet={<IconGitCommit size={12} />} title="Paga" className={classes.logoZoom}>
                                                <Text c="dimmed" size="sm">Usa nuestros metodos y decidete por el plan que tu necesites</Text>
                                                <Text size="xs" mt={4}>Paso 2</Text>
                                            </Timeline.Item>
                                            <Timeline.Item title="Llega" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed" className={classes.logoZoom}>
                                                <Text c="dimmed" size="sm">Nos dirijimos a tu destino con el tiempo que tu deseaste llegar</Text>
                                                <Text size="xs" mt={4}>Paso 3</Text>
                                            </Timeline.Item>
                                            <Timeline.Item title="Recomiendanos" bullet={<IconMessageDots size={12} />} className={classes.logoZoom}>
                                                <Text c="dimmed" size="sm">Gracias por usar nuestros servicios, Recomiendanos para que crezcamos y ofrezcamos mejores servicios</Text>
                                                <Text size="xs" mt={4}>Paso 4</Text>
                                            </Timeline.Item>
                                        </Timeline>
                                        <Group justify="flex-end" mt="xl">
                                            <Image src={imagen4} className={`${classes.desktopimage} ${classes.logoZoom} `} w="50%" />
                                        </Group>
                                    </div>
                                    <Paper bg="rgba(245, 128, 25, 0.15)" pb="xl" radius="xl" shadow="xl">
                                        <Group justify="center">
                                            <Image src={imagen5} className={`${classes.desktopimage} ${classes.logoZoom} `} w="80%" />
                                        </Group>

                                    </Paper>
                                </SimpleGrid>

                                <SimpleGrid cols={1} verticalSpacing="xl" pt="xl">
                                    <Text ta="center">
                                        Nuestros rangos de servicio son amplios, no importa donde te encuentres, nosotros te llevamos a tu destino. Algunos de ellos son como los siguientes: Bradenton, Sarasota, Palmetto, Ellenton, entre otros.
                                    </Text>

                                </SimpleGrid>
                            </Container>
                        </Center>
                    </div>
                </Paper>
            </div>



            <div>
                <Paper radius={150}>
                    <Box>
                        <Title ta="center" pt="3%" size="250%">
                            Lo que te podemos {' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'lime', to: 'green' }}
                                ta="center"
                            >
                                ofrecerte
                            </Text>{' '}
                            con nuestros servicios
                        </Title>
                        <Text className={classes2.description} ta="center" fw={500} c="black" size='lg'>
                            Nuestros servicios son variados y se adaptan a tus necesidades. Mira lo que se ajusta a ti y contactanos para mayor informacion.
                        </Text>
                    </Box>
                    <div>
                        <Container>
                            <SimpleGrid cols={2} spacing="5rem" verticalSpacing="xl">
                                <Paper bg="white" py="xl" radius="xl" shadow="xl" my="xl">
                                    <Group justify="center">
                                        <Text size="2rem"> Que es lo que buscas? </Text>
                                        <Image src={imagen7} className={`${classes.desktopimage} ${classes.logoZoom} `} w="80%" />
                                        <Text size="xl"> Espacio para 3? </Text>
                                        <Image src={imagen8} className={`${classes.desktopimage} ${classes.logoZoom} `} w="80%" />
                                        <Text size="xl"> Espacio para 5? </Text>
                                    </Group>
                                </Paper>
                                <div>
                                    <Group justify="center" mt="xl" >
                                        <Title ta="center" pt="3%" size="200%">
                                            TARIFAS {' '}
                                            <Text
                                                component="span"
                                                inherit
                                                c="orange"
                                                ta="center"
                                            >
                                                TAXI CARIBE
                                            </Text>{' '}
                                        </Title>
                                        <Text size="lg">
                                            Nuestras tarifas son sinceras y sobre todo justas. Esperamos brindarte el mejor servicio y que te sientas satisfecho con el mismo. No dudes en contactarnos para mayor informacion. El rango es sobre Sarasota, Bradenton, Palmetto y Ellenton.
                                        </Text>
                                    </Group>
                                    <Group justify='center' mt="xl">
                                        <SimpleGrid cols={1} spacing="xs" verticalSpacing="lg">
                                            <Paper shadow="md" radius="md" withBorder p="8" className={classes.logoZoom}>
                                                <Text size="xl">$6.99 Minima</Text>
                                            </Paper>
                                            <Paper shadow="md" radius="md" withBorder p="8" className={classes.logoZoom}>
                                                <Text size="xl">$2.99 Empieza taximetro + $1.99 por milla</Text>
                                            </Paper>
                                            <Paper shadow="md" radius="md" withBorder p="8" className={classes.logoZoom}>
                                                <Text size="xl">$10.99 Delivery (Comida)</Text>
                                            </Paper>
                                            <Paper shadow="md" radius="md" withBorder p="8" className={classes.logoZoom}>
                                                <Text size="xl">$13.99 Delivery (Licor y Cigarrillos)</Text>
                                            </Paper>
                                            <Paper shadow="md" radius="md" withBorder p="8" className={classes.logoZoom}>
                                                <Text size="xl"> $4.99 Nocturna (luego de 12 AM)</Text>
                                            </Paper>
                                        </SimpleGrid>
                                    </Group>
                                </div>
                            </SimpleGrid>

                            <SimpleGrid cols={1} verticalSpacing="xl" py="xl">
                                <Text ta="center">
                                    La tarifa puede cambiar dependiendo si necesita el asiento delantero, si se llevan niños (asiento especial), transporte de mascortas, y paradas adicionales. El taximetro aumenta $0.30 por minuto de espera. (recuerde que el taxímetro toma en consideración tanto el tráfico, así como desvíos en
                                    la ruta en caso de ser necesarios, por lo tanto, su tarifa puede ser variable. Si desea adquirir un
                                    precio fijo con nosotros puede comunicarse con la base.)
                                </Text>

                            </SimpleGrid>
                        </Container>
                    </div>
                </Paper>
            </div >

            <div>
                <Paper h="100dvh" bg="rgba(252, 161, 43, 0.05)" style={{ borderTopLeftRadius: '150px', borderTopRightRadius: '150px' }}>
                    <Box>
                        <Title ta="center" pt="3%" size="250%">
                            FAQs sobre {' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'orange', to: 'yellow' }}
                                ta="center"
                            >
                                Taxi Caribe
                            </Text>{' '}

                        </Title>
                        <Text className={classes2.description} ta="center" fw={500} c="black" size='lg'>
                            Algunas de nuestra preguntas frecuentes que nuestros clientes nos hacen. Si tienes alguna pregunta adicional, no dudes en contactarnos.
                        </Text>
                    </Box>
                    <div >
                        <Container size="lg" mt="3%">
                            <Grid id="faq-grid" gutter={50}>
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <Image src={imagen4} alt="Preguntas más frecuentes" className={classes.logoZoom} />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 6 }}>
                                    <Title order={2} ta="left" >
                                    Preguntas más frecuentes
                                    </Title>

                                    <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated" mt="lg" transitionDuration={300} maw={900}>
                                        <Accordion.Item className={classes.item} value="reset-password">
                                            <Accordion.Control>How can I reset my password?</Accordion.Control>
                                            <Accordion.Panel>{placeholder}</Accordion.Panel>
                                        </Accordion.Item>

                                        <Accordion.Item className={classes.item} value="another-account">
                                            <Accordion.Control>Can I create more that one account?</Accordion.Control>
                                            <Accordion.Panel>{placeholder}</Accordion.Panel>
                                        </Accordion.Item>

                                        <Accordion.Item className={classes.item} value="newsletter">
                                            <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                                            <Accordion.Panel>{placeholder}</Accordion.Panel>
                                        </Accordion.Item>

                                        <Accordion.Item className={classes.item} value="credit-card">
                                            <Accordion.Control>
                                                Do you store credit card information securely?
                                            </Accordion.Control>
                                            <Accordion.Panel>{placeholder}</Accordion.Panel>
                                        </Accordion.Item>
                                    </Accordion>
                                </Grid.Col>
                            </Grid>
                            <Group gap={30} visibleFrom="xs" justify='center' mt="xl">

                                <Paper withBorder radius="md" className={`${classes.comment} ${classes.logoZoom}`} w="30%" mt="xl" shadow="xl" bg="rgba(72, 192, 144, 0.08)">
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text fz="sm" c='black'>Ruben Urdaneta</Text>
                                            <Text fz="xs" c='black' >
                                                Owner
                                            </Text>
                                        </div>
                                    </Group>
                                    <TypographyStylesProvider className={classes.body} c="black">
                                        <div
                                            className={classes.content}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur unde possimus eum impedit exercitationem rem, similique praesentium deserunt illo ipsum sed iste qui culpa laboriosam veritatis incidunt? Repudiandae, consectetur!</p>',
                                            }}
                                        />
                                    </TypographyStylesProvider>
                                </Paper>
                                <Paper withBorder radius="md" className={`${classes.comment} ${classes.logoZoom}`} w="30%" mt="xl" shadow="xl" bg="rgba(254, 192, 144, 0.15)">
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text fz="sm" color='Black'>Ruben Urdaneta</Text>
                                            <Text fz="xs" color='Black'>
                                                Owner
                                            </Text>
                                        </div>
                                    </Group>
                                    <TypographyStylesProvider className={classes.body} c="black">
                                        <div
                                            className={classes.content}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur unde possimus eum impedit exercitationem rem, similique praesentium deserunt illo ipsum sed iste qui culpa laboriosam veritatis incidunt? Repudiandae, consectetur!</p>',
                                            }}
                                        />
                                    </TypographyStylesProvider>
                                </Paper>
                                <Paper withBorder radius="md" className={`${classes.comment} ${classes.logoZoom}`} w="30%" mt="xl" shadow="xl" bg="rgba(254, 192, 144, 0.15)">
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text fz="sm" color='Black'>Ruben Urdaneta</Text>
                                            <Text fz="xs" color='Black'>
                                                Owner
                                            </Text>
                                        </div>
                                    </Group>
                                    <TypographyStylesProvider className={classes.body} c="black">
                                        <div
                                            className={classes.content}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur unde possimus eum impedit exercitationem rem, similique praesentium deserunt illo ipsum sed iste qui culpa laboriosam veritatis incidunt? Repudiandae, consectetur!</p>',
                                            }}
                                        />
                                    </TypographyStylesProvider>
                                </Paper>
                            </Group>
                        </Container>
                    </div>
                </Paper>
            </div >

        </>

    );
}

export default MainPage;