import React from 'react';
import FlexContainer from '@/components/ui/flexContainer';
import styles from './styles.module.css';
import spotifyLogo from '@/assets/icons/spotify.svg';
import appleLogo from '@/assets/icons/apple-green.svg';
import googleLogo from '@/assets/icons/google-green.svg';
import xLogo from '@/assets/icons/x-green.svg';


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
                        <img className={`${styles.logo} ${styles.socialLogo}`} src={appleLogo} alt="Apple logo" />
                        <img className={`${styles.logo} ${styles.socialLogo}`} src={googleLogo} alt="Google logo" />
                        <img className={`${styles.logo} ${styles.socialLogo}`} src={xLogo} alt="X logo" />
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    </FlexContainer>
    )
}

export default Main;
