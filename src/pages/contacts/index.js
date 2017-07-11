import React from 'react'
import Link from 'gatsby-link'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import _ from 'lodash'

const tableData = [
	{
		FirstName: `Arnaldo Jan`,
		LastName: `Ubas`,
		DOB: `06-27-1995`
	},
	{
		FirstName: `Edelyn`,
		LastName: `Duot`,
		DOB: `11-17-1995`
	},
]

class ContactList extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<div>
					<h1>Contact List</h1>
					<Table>
						<TableHeader
							displaySelectAll={false}
				            adjustForCheckbox={false}
				            enableSelectAll={false}>
							<TableRow>
								<TableHeaderColumn>First Name</TableHeaderColumn>
								<TableHeaderColumn>Last Name</TableHeaderColumn>
								<TableHeaderColumn>Birthday</TableHeaderColumn>
								<TableHeaderColumn></TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody
							displayRowCheckbox={false}>
							{_.map(tableData, (o, i) => {
								return (
									<TableRow key={i}>
										<TableRowColumn>{o.FirstName}</TableRowColumn>
										<TableRowColumn>{o.LastName}</TableRowColumn>
										<TableRowColumn>{o.DOB}</TableRowColumn>
										<TableRowColumn><Link to="./edit">{/*Should pass the obj using history sort of*/}edit</Link></TableRowColumn>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default ContactList