import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import classConcat from '../../../../misc/classConcat'
import useIsInView from '../../../../hooks/useIsInView'
import './styles.css'

export const FADE_DIRECTION = {
    BOTTOM: 'BOTTOM',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    TOP: 'TOP',
    NONE: 'NONE',
}

const FadeTransition = ({
    tag,
    children,
    direction,
    delay,
    duration,
    release,
    show,
    showInitial,
    className,
    style,
    auto,
    offset,
    grow, 
    ...others
}) => {
    // Validate
    // - Ensure direction given is a recognised direction.
    const directionKeys = Object.keys(FADE_DIRECTION)
    let directionIsMember = false
    directionKeys.forEach((key) => {
        const val = FADE_DIRECTION[key]
        if (direction === val) directionIsMember = true
    })
    if (directionIsMember === false) {
        throw new Error(
            `Unrecognised direction '${direction}'.`,
        )
    }
    // Ref 
    const ref = React.createRef()
    // State
    const [showing, setShowing] = React.useState(showInitial)
    // Hooks 
    const isInView = useIsInView(ref, offset)
    // Effects
    React.useEffect(() => {
        if (auto) {
            console.log(isInView)
            if (showing !== isInView) {
                setShowing(isInView)
            }
            return
        }
        if (show !== showing) setShowing(show)
    })
    // Getters
    const getFadeClass = () => {
        if (direction === FADE_DIRECTION.NONE) return null
        const suffix = direction.toLowerCase()
        return `fade-transition-${suffix}`
    }
    // Computations
    const shouldShow = (auto ? isInView : showing)
    const compositeClassName = classConcat(
        className,
        'fade-transition',
        getFadeClass(),
        shouldShow ? 'fade-transition--show' : null,
    )
    const compositeStyle = {
        ...style,
        transitionDelay: shouldShow ? delay : release,
        transitionDuration: duration
    }
    // Render
    return React.createElement(
        tag,
        {
            className: compositeClassName,
            style: compositeStyle,
            ref: ref,
            ...others,
        },
        children,
    )
}

FadeTransition.defaultProps = {
    children: null,
    tag: 'div',
    direction: FADE_DIRECTION.BOTTOM,
    delay: '0.5s',
    duration: null,
    release: '0.15s',
    show: false,
    showInitial: false,
    className: null,
    style: {},
    auto: true,
    offset: {x: 0, y: 0},
    grow: false,
}

FadeTransition.propTypes = {
    children: PropTypes.node,
    tag: PropTypes.string,
    direction: PropTypes.string,
    delay: PropTypes.string,
    release: PropTypes.string,
    show: PropTypes.bool,
    showInitial: PropTypes.bool,
    className: PropTypes.string,
    style: stylePropType,
    auto: PropTypes.bool,
    offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    grow: PropTypes.bool,
}

export default FadeTransition
