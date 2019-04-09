import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Nobility</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>The nobility (or pipiltin) most notably wore prized feather garments, and owned much land which serfs and tenants worked. Although this class was mostly hereditary, some common people were able to rise up in society by performing deeds of great valor on the battlefield. These people were called "eagle nobles".</p>
          <p>One level above the pipiltin was the teteuhctin. These people held the highest positions such as city/regional governors. They lived in amazingly splendid palaces and wore even better clothes and jewelry than the pipiltin. The Aztec King was a member of this class.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Artisans/Traders</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>The artisan class was named tolteca, after the earlier civilization of the Toltecs. Craftsmen were held in high regard. They did things like carpentry, metalwork, pottery, weaving, and more. Other very important professions were the merchants, traders, and hunters. Especially, some traders could gain much wealth if they traded certain things (slave trading could gain you a lot of money). </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Farmers</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>The farmers were by far the largest part of the Aztec social pyramid. They were divided into two subgroups, the field workers and a higher group. The field workers did the weeding, planting, and hoeing, irrigating, and more simple work. The higher-up class was more supervisory and did more complex things, including seeding and transplanting. Some Aztec farmers worked their own land, while others worked on estates and farmed other people's land. The serfs, the people who farmed other's land, were the lowest class in Aztec society besides the slaves. They didn't own land and paid up to 30% of their produce to their overlords. Farmers were also expected to help with the military during war and assist state projects like road and temple building.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
