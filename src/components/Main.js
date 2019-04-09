import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'

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
          <span className="image main"><img src={pic04} alt="" /></span>
          <p>The slaves were generally people who had committed serious crimes such as theft, conquered people, or people who were forced to sell themselves into slavery to gain back debt (generally because of gambling). Slaves could buy themselves free if they had the means, or could gain freedom in different ways. Slaves were required to farm as well as work as general laborers or domestic servants among other jobs. Slaves generally weren't re-sold and were protected by law from abuse by their masters or anyone else. Talented slaves could go higher up on the social ladder and become estate owners. Slavery was not in-born and just because your parent was one doesn't mean you have to be one, and slaves had much better rights. If slaves married their masters, could show their master mistreated them, or had children with them, they could be set free.</p>
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
