import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends React.Component {
	render() {
		return (
			<Grid container>
				<Grid item xs></Grid>
				<Grid item xs={10}>
					<Card variant="outlined">
						<CardContent>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<Typography variant="h4" align="center">
										Google Translate API
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<TextField
										label="Text Input"
										placeholder="Enter text for translation"
										required
										fullWidth
										multiline
									/>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="p">
										Text Output:
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Button variant="outlined" color="primary" fullWidth>
										Translate
									</Button>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		);
	}
}

export default App;