'use client';

import { FadeUpStagger, FadeUpDiv } from '@/components/animation';

export default function Projects() {
    return (
        <main>
            <h1 className='text-2xl font-black text-center gap-3'>Projects</h1>
            <div className="h-screen flex items-center justify-center" style={{ backgroundImage: "linear-gradient(to bottom right, #ff5f6d, #ffc371)" }}>
                <div className="container mx-auto text-center">
                    <FadeUpStagger>
                        <FadeUpDiv>
                            <h1 className="text-5xl font-black">Coming Really Soon</h1>
                        </FadeUpDiv>
                    </FadeUpStagger>
                </div>
            </div>
        </main>
    );
}
