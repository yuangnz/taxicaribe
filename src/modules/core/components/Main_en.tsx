
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
    Transition
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
            description: 'Delivery of food, liquor and cigarettes at any time of the day or night.',
        },
        {
            icon: IconFileCode,
            title: 'Taximetro 🚕',
            description: 'Starting rate of $3 + $2 per mile traveled during the trip',
        },
        {
            icon: IconCircleDotted,
            title: 'Night Delivery 🌃',
            description:
                'After 12AM, an additional charge of $5 applies to all services, with a minimum fee of $12.',
        },
        {
            icon: IconFlame,
            title: 'Flexible scheduling 🕙',
            description:
                'Service 24 hours a day, 7 days a week. No matter the time, we take you to your destination.',
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

    const autoplay = useRef(Autoplay({ delay: 4500 }));
    const icon = <IconInfoCircle />;
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
                    <Paper bg="rgba(254, 192, 144, 0.08)" radius={150}>
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
                                    <Text color="#562601" size='xl' mb="lg">#Safety Reliability Trustworthiness</Text>
                                    <Title c="black" ta="center" order={1} size="60" >We take care 🥊 of your needs ⚡ and drive for you 🚖</Title>
                                    <Text mt="xl" c='#3D0500' pr="xl" pl="xl" ta="center">
                                    Take the stress out of driving, we take care of getting you to your destination safely and reliably. No matter if it is day or night, we will take you to your destination.
                                    </Text>
                                    <Group>
                                        <Button size="xl" radius="lg" className={classes.control} color='#F29200' mb={20} justify="center" c="white" style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }} >
                                            Contact
                                        </Button>
                                    </Group>
                                    <Text pr="xl" pl="xl" ta="center" c="dimmed">
                                        Click the button for more information.
                                    </Text>

                                    <Group>
                                        <Image src={imagen4} className={classes.logoZoom} w="auto" h="100" mt="lg" />
                                    </Group>
                                    <Text ta="center" c="dimmed" pt="lg">Taxi Caribe C.A. © 2024 - 2024</Text>
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
                                    <Text ta="center" c="dimmed" pt="lg">Taxi Caribe C.A. © 2024 - 2024</Text>
                                </Container>
                            </Center>

                        </div>

                    </Paper>
                </Carousel.Slide>
                {/* ...other slides */}

                <Carousel.Slide>
                    <Paper bg="rgba(72, 192, 144, 0.08)" radius={150}>
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

                                        <Text ta="center" c="dimmed">Taxi Caribe C.A. © 2024 - 2024</Text>
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

                                        <Text ta="center" c="dimmed">Taxi Caribe C.A. © 2024 - 2024</Text>
                                    </SimpleGrid>
                                </Container>
                            </Center>
                        </div>
                    </Paper>
                </Carousel.Slide>

                


            </Carousel>
            <div>
                <BackgroundImage
                    src="https://wallpapers.com/images/hd/yellow-taxi-beside-pedestrian-lane-2w4kdu3bvrf6rqei.jpg"
                    radius="xs"
                >
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
                </BackgroundImage>
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
                <Paper radius={150}>
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
                                        <Timeline active={1} bulletSize={31} align="right" lineWidth={4} color='orange' mt="xl"  >
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

                                    <Text ta="center" c="dimmed">Taxi Caribe C.A. © 2024 - 2024</Text>
                                </SimpleGrid>
                            </Container>
                        </Center>
                    </div>
                </Paper>
            </div>
            <div>
                <BackgroundImage
                    src="https://images.tripshock.com/destination/124/Sarasota.webp"
                    radius="xs"
                >
                    <Box h="100dvh" >
                        <Box>
                            <Title className={classes2.title} ta="center" pt="3%">
                                A{' '}
                                <Text
                                    component="span"
                                    inherit
                                    variant="gradient"
                                    gradient={{ from: 'pink', to: 'yellow' }}
                                    ta="center"

                                >
                                    fully featured
                                </Text>{' '}
                                React technology library
                            </Title>

                            <Text className={classes2.description} my={30} ta="center" fw={500} c="black">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam doloremque blanditiis beatae sint maiores! Porro eum velit inventore, hic nam, odio fugiat accusantium consequatur laboriosam necessitatibus soluta. Natus, architecto dolorem?
                            </Text>

                        </Box>


                        <Flex
                            mih={50}
                            gap="xl"
                            justify="center"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Paper withBorder p="lg" radius="md" shadow="md">
                                <Title fw={700} order={2} >
                                    Tarifas Basicas
                                </Title>

                                <Group justify="space-between">
                                    <Text c="dimmed" size="xs">
                                        Tipo de servicio
                                    </Text>
                                    <Text ta="right" fw={750}>Tarifa</Text>

                                </Group>
                                <Divider mb="xl"></Divider>
                                <Group justify="space-between">
                                    <Text size='xl' fw={700} td="underline">
                                        Minima
                                    </Text>
                                    <Text ta="right" size="xl" fw={500}>$7</Text>
                                </Group>
                                <Divider mb="xs"></Divider>
                                <Group justify="space-between">
                                    <Text size='lg' fw={500} fs="italic" c="orange">
                                        Taximetro
                                    </Text>
                                    <Text ta="right" size="lg" fw={500}>$3 + $2 por milla</Text>
                                </Group>
                                <Divider variant='dashed'></Divider>
                                <Group justify="space-between">
                                    <Text fw={500}>
                                        Delivery <Text span c="lime" inherit fw={500}>(Comida)</Text>
                                    </Text>
                                    <Text ta="right" size="lg" fw={500}>$11</Text>
                                </Group>
                                <Divider variant='dashed'></Divider>
                                <Group justify="space-between">
                                    <Text fw={500}>
                                        Delivery <Text span c="red" inherit fw={500}>(Licor, Cigarrillos)</Text>
                                    </Text>
                                    <Text ta="right" size="lg" fw={500}>$11</Text>
                                </Group>
                                <Divider variant='dashed'></Divider>
                                <Group justify="space-between">
                                    <Text fw={500} c="violet">
                                        Nocturna
                                    </Text>
                                    <Text ta="right" size="lg" fw={500}>5$ All Services (Min. $12)</Text>
                                </Group>
                                <Divider variant='dashed'></Divider>
                                <Title mt="xl" order={4}>
                                    Descripcion Detallada
                                </Title>
                                <Divider mb="lg"></Divider>
                                <Text style={{ maxWidth: '330px' }} ><Text span inherit fw={500} td="underline">Minima:</Text> Es la tarifa base mínima aplicable para cualquier servicio solicitado.</Text>
                                <Divider variant='dashed'></Divider>
                                <Text style={{ maxWidth: '300px' }}><Text span inherit fw={500}>Taximetro:</Text> La tarifa inicial es de $3, y se suman $2 por cada milla recorrida durante el trayecto.</Text>
                                <Divider variant='dashed'></Divider>
                                <Text style={{ maxWidth: '300px' }}><Text span inherit fw={500}>Delivery:</Text> Tarifa fija para la entrega de comida. </Text>
                                <Divider variant='dashed'></Divider>
                                <Text style={{ maxWidth: '300px' }}><Text span inherit fw={500}>Delivery:</Text> Tarifa fija para la entrega de licor y cigarrillo. </Text>
                                <Divider variant='dashed'></Divider>
                                <Text style={{ maxWidth: '300px' }}><Text span inherit fw={500}>Nocturna:</Text> A partir de las 12AM, se aplica un cargo adicional de $5 a todos los servicios, con una tarifa mínima de $12.</Text>
                                <Group justify="flex-end" mt="md">

                                    <Group>
                                        <Button variant="light" size="lg" radius="lg" color='#72ae41' justify="center">
                                            Contact
                                        </Button>
                                    </Group>
                                </Group>
                            </Paper>
                            <Paper withBorder p="lg" radius="md" shadow="md">
                                <Group justify="space-between" mb="xs">
                                    <Text fz="md" fw={500}>
                                        Allow cookies
                                    </Text>
                                </Group>
                                <Text c="dimmed" fz="xs">
                                    Planes uno
                                </Text>
                                <Group justify="flex-end" mt="md">
                                    <Group>
                                        <Button variant="light" size="lg" radius="lg" color='#72ae41' mb={100} justify="center">
                                            Contact
                                        </Button>
                                    </Group>
                                </Group>
                            </Paper>
                            <Paper withBorder p="lg" radius="md" shadow="md">
                                <Group justify="space-between" mb="xs">
                                    <Text fz="md" fw={500}>
                                        Allow cookies
                                    </Text>
                                </Group>
                                <Text c="dimmed" fz="xs">
                                    Planes uno
                                </Text>
                                <Group justify="flex-end" mt="md">
                                    <Group>
                                        <Button variant="light" size="lg" radius="lg" color='#72ae41' mb={100} justify="center">
                                            Contact
                                        </Button>
                                    </Group>
                                </Group>
                            </Paper>

                            <Paper withBorder p="lg" radius="md" shadow="md">
                                <Group justify="space-between" mb="xs">
                                    <Text fz="md" fw={500}>
                                        Allow cookies
                                    </Text>
                                </Group>
                                <Text c="dimmed" fz="xs">
                                    Planes uno
                                </Text>
                                <Group justify="flex-end" mt="md">
                                    <Group>
                                        <Button variant="light" size="lg" radius="lg" color='#72ae41' mb={100} justify="center">
                                            Contact
                                        </Button>
                                    </Group>
                                </Group>
                            </Paper>
                        </Flex>

                    </Box>
                </BackgroundImage>
            </div>
        </>

    );
}

export default MainPage;