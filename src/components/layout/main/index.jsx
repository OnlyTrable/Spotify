import React from 'react';
import FlexContainer from '@/components/ui/flexContainer';
import styles from './styles.module.css';

// Spotify імпортуємо як URL, бо він для img
import spotifyLogo from '@/assets/icons/spotify.svg';

// Інші іконки імпортуємо як React-компоненти за допомогою '?react'
import AppleLogo from '@/assets/icons/apple.svg?react';
import GoogleLogo from '@/assets/icons/google.svg?react';
import XLogo from '@/assets/icons/x.svg?react';


function Main () {
    return (
        <FlexContainer className={styles.fullContainer}>
            <FlexContainer className={styles.container}>
                <FlexContainer className={styles.topLogo}>
                    <img src={spotifyLogo} alt="Spotify logo" />
                </FlexContainer>
                <FlexContainer className={styles.other}>
                    <h1>LIFE IS WASTED ON THE LIVING</h1>
                        <p>Sign in</p>
                    <p>with</p>
                <FlexContainer className={styles.logosouter}>
                    <FlexContainer className={styles.logos}>
                        {/* Тепер AppleLogo, GoogleLogo, XLogo будуть React-компонентами */}
                        <AppleLogo className={`${styles.logo} ${styles.socialLogo}`} aria-label="Apple logo" />
                        <GoogleLogo className={`${styles.logo} ${styles.socialLogo}`} aria-label="Google logo" />
                        <XLogo className={`${styles.logo} ${styles.socialLogo}`} aria-label="X logo" />
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    </FlexContainer>
    )
}

export default Main;