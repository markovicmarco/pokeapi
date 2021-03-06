import React from "react";
import { Image, Grid, Segment, Label, Divider, Header } from "semantic-ui-react";
import ValidateColor from "../ValidateColor";
import {upperCase} from './Pokemon'

const Types = ({ data }) => {
  return (
    <Segment>
      <Divider horizontal>
        <Header as="h1" className="cap" content="Type" />
      </Divider>

      <Grid stackable columns="equal">
        {data.map((r) => (
          <Grid.Column textAlign="center">
            <Segment inverted
              className="cap"
              key={r.slot}
              style={{
                backgroundColor: ValidateColor(r.type.name)
              }}
            >
              {r.type.name}
            </Segment>
          </Grid.Column>
        ))}
      </Grid>
    </Segment>
  );
};

export default Types;
