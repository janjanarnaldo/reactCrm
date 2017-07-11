import React from "react"
import PropTypes from "prop-types"
import Link, { navigateTo } from "gatsby-link"
import Helmet from "react-helmet"
import { rhythm } from "../utils/typography"
import logo from '../images/brand.gif'

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

function navigateLogout() {
  navigateTo('/');
}

let logoutStyle = {
  float: 'right',
  // display: (localStorage.getItem('loggedIn') === 'true' ? 'block' : 'none')
  display: 'none'
}

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  /*constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }*/

  logout = (event) => {
    event.preventDefault();

    // localStorage.setItem('loggedIn', 'false')
    logoutStyle.display = 'none'
    navigateLogout();
  }

  render() {
    return (
      <div>
        <Helmet
          title="myCRM"
          meta={[
            { name: "description", content: "Test myCRm" },
            { name: "keywords", content: "contacts, crud" },
          ]}
        />
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: rhythm(1),
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {/*<img src={logo} alt="Logo"/>*/}
                myCRM
              </Link>
              <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} style={logoutStyle}>
                <IconButton tooltip="Logout"
                  onClick={(event) => this.logout(event)} style={logoutStyle}>
                  <FontIcon className="material-icons" color="white">power_settings_new</FontIcon>
                </IconButton>
              </MuiThemeProvider>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
