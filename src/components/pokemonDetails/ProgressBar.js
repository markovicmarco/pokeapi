import React from 'react';
import { Progress, Grid, Label } from 'semantic-ui-react';

const ProgressBar = ({value, label, total = '150', type = 'ratio', size = 'normal'}) =>{
return (
  <>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column width={4} textAlign='right'><Label size='small'>{ label }:</Label></Grid.Column>
      <Grid.Column width={12}><Progress value={ value } total={ total } progress={ type } indicating size={ size } /></Grid.Column>
    </Grid.Row>
    </Grid>
</>
)
}
export default ProgressBar