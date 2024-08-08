import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { Project } from "@/components/projectData/projectdata"

interface ProjectDataProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function ProjectsCard({
  project,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: ProjectDataProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={project.cover}
              alt={project.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{project.name}</h3>
        <p className="text-xs text-muted-foreground">{project.artist}</p>
      </div>
    </div>
  )
}