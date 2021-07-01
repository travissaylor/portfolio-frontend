import {
    Container,
    Flex,
    Grid,
    Heading,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/layout"
import Head from "next/head"
import Image from "next/image"
import { GetStaticProps } from "next"

import BasicHeading from "../../components/BasicHeading"
import { IProject } from "../../types/global"
import Link from "next/link"
import { Button } from "@chakra-ui/button"
import ProjectCard from "../../components/ProjectCard"

type IProps = {
    projects: IProject[]
}

export default function Projects({ projects }: IProps) {
    return (
        <>
            <Head>
                <title>Projects - Travis Saylor's Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BasicHeading title="Projects" />

            <Container maxW="5xl">
                <SimpleGrid columns={[1, null, 2]} spacing={10}>
                    {projects &&
                        projects.map((project, index) => (
                            <ProjectCard project={project} key={index} />
                        ))}
                </SimpleGrid>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch("http://localhost/api/projects")
    const projects = await res.json()

    return {
        props: {
            projects: projects,
        }, // will be passed to the page component as props
    }
}
