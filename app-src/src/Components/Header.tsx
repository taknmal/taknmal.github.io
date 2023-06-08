import { Link } from '@tanstack/react-location'
import { AppNavBar } from './AppNavBar'
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';

export function Header({ children }: { children?: any }) {
    const [standalone, setStandalone] = useState(false)
    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setStandalone(true);
          }
    })


    return (
        <header style={{ backgroundColor: 'var(--background-color)' }}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div
                            className="dark-mode-switch-container"
                            style={{
                            //     position: 'fixed',
                            //     top: 'env(safe-area-inset-top)',
                            //     left: '0',
                                // padding: '1rem',
                            //     zIndex: 9999,
                                display:standalone? 'none' : 'flex',
                                alignItems:'center',
                                cursor:'pointer'
                            }}
                            onClick={() => {
                                const el = document.getElementById('app-save-modal') as HTMLDialogElement
                                el.showModal()
                            }}
                        >
                            <span className='material-icons' style={{fontSize:'2rem'}}>install_mobile</span><span>Vista app</span>
                            
                        </div>
            <Link
                to={'/'}
                search={(old) => ({ ...old, scroll: 0 })}
                className="heading"
            >
                Íslenskt táknmál
            </Link>
            <div
                            className="dark-mode-switch-container"
                            style={{
                                // position: 'fixed',
                                // top: 'env(safe-area-inset-top)',
                                // right: '0',
                                // padding: '1rem',
                                zIndex: 9999,
                            }}
                        >
                            <DarkModeSwitch/>
                        </div>
            </div>
            <AppNavBar type="header" />
            {children}
        </header>
    )
}
