"use client";

import { useSession } from "next-auth/react"
import { MainNav } from "@/app/control-panel/components/main-nav"
import { UserNav } from "@/app/control-panel/components/user-nav"
import Hero from "@/app/hero";
import ProgLanguages from "@/app/progLanguages";
import Projects from "@/app/projects";
import Faq from "@/app/faq";
import { Card } from "@/components/ui/card";
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"


export default function Home() {
    const { data: session } = useSession()

    if (session) {
        return (
            <div>
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        <MainNav className="mx-6" />
                        <div className="ml-auto flex items-center space-x-4">
                            <UserNav />
                        </div>
                    </div>
                </div>
                <div className='container space-y-6 lg:my-10 mt-16'>
                    This is Naufal Randika&apos;s Home Page Overview
                </div>
                <div className='container space-y-6 lg:my-10 mt-16'>
                    <Card className="p-10 border border-red-800">
                        <Hero />
                        <div className="h-12"></div>
                        <ProgLanguages />
                        <div className="h-12"></div>
                        <Projects />
                        <div className="h-12"></div>
                        <section id="faq">
                            <Faq />
                        </section>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="lg:p-8 items-center justify-center">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <div className="my-5">
                        You are not logged in.
                        <br />
                        Only Randi can access control panel.
                        </div>
                        If you are Randi, please login.
                        <Link href="/login"
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "border border-red-800"
                            )}> Login
                        </Link>
                        <br />
                        but if you are not Randi, please go to home page and have fun!
                        <Link href="/"
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "border border-red-800"
                            )}> Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
