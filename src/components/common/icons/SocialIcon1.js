import React from 'react'

const SocialIcon1 = ({ width, height }) => {
    return (
        <svg width={width} height={height}>
            <use xlinkHref="#social-share-icon-1">
                <symbol id="social-share-icon-1" viewBox="0 0 30 30">
                    <path d="M30 15C30 6.71572 23.2843 0 15 0C6.71572 0 0 6.71572 0 15C0 22.4868 5.48525 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9626 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.925 9.84375 17.3438 11.0001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.4868 30 15Z" />
                </symbol>
            </use>
        </svg>
    )
}

export default SocialIcon1