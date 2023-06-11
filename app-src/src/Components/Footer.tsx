import { Link } from '@tanstack/react-location'
import { AppNavBar } from './AppNavBar'
import { useEffect, useState } from 'react';
import SignWikiCredits from './SignWikiCredits';

export function Footer({ children }: { children?: any }) {
    const [standalone, setStandalone] = useState(false)
    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setStandalone(true);
          }
    })


    return (
        <footer>
            {children}
            <AppNavBar type="footer" />
            <SignWikiCredits />
        </footer>
    )
}
