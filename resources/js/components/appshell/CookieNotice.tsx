import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CookieNotice() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) setVisible(true);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie_consent', 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-2">
            <Card className="max-w-2xl w-full bg-background border shadow-lg">
                <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4">
                    <p className="text-sm text-muted-foreground leading-snug">
                        🍪 Diese Website verwendet nur technisch notwendige Cookies, z.&nbsp;B. für
                        Login und Sicherheit. Es werden{' '}
                        <strong>keine Tracking- oder Werbe-Cookies</strong> verwendet.{' '}
                        <a
                            href="/cookie-hinweis"
                            className="underline text-primary hover:text-primary/80 ml-1"
                        >
                            Mehr erfahren
                        </a>
                    </p>

                    <Button
                        size="sm"
                        variant="default"
                        onClick={acceptCookies}
                        className="shrink-0"
                    >
                        OK
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
