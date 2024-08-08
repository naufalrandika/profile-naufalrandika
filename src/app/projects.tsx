'use client';

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { projectData } from "@/components/projectData/projectdata"
import { ProjectsCard } from "@/components/project-card"


export default function Projects() {
    return (
        <main>
            <h1 className='text-2xl font-black text-center'>Projects</h1>
            <div className="container mx-auto text-center">
                <Separator className="my-2" />
                <div className="relative">
                    <ScrollArea>
                        <div className="flex space-x-4 pb-4 justify-center">
                            {projectData.map((project) => (
                                <ProjectsCard
                                    key={project.name}
                                    project={project}
                                    className="w-[250px]"
                                    aspectRatio="portrait"
                                    width={250}
                                    height={330}
                                />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </main>
    );
}
