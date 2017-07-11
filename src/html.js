import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { TypographyStyle } from "react-typography"
import typography from "./utils/typography"

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  }

  render() {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!../public/styles.css"),
            __html: require("!raw!../src/css/markdown-styles.css"),
          }}
        />
      )
    } else {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!../src/css/markdown-styles.css"),
          }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <TypographyStyle typography={typography} />
          {css}
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </head>
        <body>
            <div
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
            {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
