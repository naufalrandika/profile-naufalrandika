'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <main>
            <h1 className='text-2xl font-black text-center gap-3'>FAQ</h1>
            <div>
                <Accordion type="single" collapsible className="w- mx-10">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What do you do as a software engineer?</AccordionTrigger>
                        <AccordionContent>
                            I transform caffeine into code and bugs into features. Sometimes I even write code that works on the first try... but that&apos;s a rare sighting, like a unicorn.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How did you become a software engineer?</AccordionTrigger>
                        <AccordionContent>
                            After realizing my dreams of becoming a wizard were dashed by the lack of magic schools, I settled for the next best thing: programming. Turns out, coding spells are pretty powerful too.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What&apos;s your favorite programming language?</AccordionTrigger>
                        <AccordionContent>
                        Asking a software engineer to choose a favorite programming language is like asking a parent to choose their favorite child. But if I must, I&apos;d say Java following with Script. Or Python. Or PHP...
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Do you ever encounter bugs in your code?</AccordionTrigger>
                        <AccordionContent>
                        Bugs are my constant companions. They keep me humble and remind me that perfection is a myth. Plus, debugging is just another puzzle to solve!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>What&apos;s your superpower as a software engineer?</AccordionTrigger>
                        <AccordionContent>
                        I can stare at a screen for hours, forget to eat, and occasionally merge without conflicts. Oh, and I have a sixth sense for missing semicolons.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>How do you handle tight deadlines?</AccordionTrigger>
                        <AccordionContent>
                        With a mix of caffeine, late nights, and the occasional existential crisis. And lots of good music to keep the momentum going!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>What&apos;s your favorite tech rizz?</AccordionTrigger>
                        <AccordionContent>
                        Are you an API? Because my world feels incomplete without connecting with you.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    );
}
