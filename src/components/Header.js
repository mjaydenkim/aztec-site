import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-graduation-cap"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>The Aztecs</h1>
                <p>A website created for history class about Aztec society.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Nobility</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Artisans/Traders</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Farrmers</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
