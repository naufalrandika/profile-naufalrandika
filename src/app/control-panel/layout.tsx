import SessionWrapper from '@/app/login/components/sessionwrapper';
import { ThemeProvider } from 'next-themes';

export default function ControlPanelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionWrapper>
            <div>
                <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
            </div>
        </SessionWrapper>
    );
}
